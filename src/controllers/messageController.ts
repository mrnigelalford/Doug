import * as dotenv from 'dotenv';
import { TagEvent } from '../types/webhook';
import { Task } from '../types/clickupTask';
import setNewCenter from '../webflow/setCenterFlow';
import { createHubspotForm } from './createHSForm';
import { HSForm } from '../types/hubspot';

dotenv.config();
let comment;

const setPostTag = async (task_id: string, tag_name: string) => {
  const query = new URLSearchParams({
    custom_task_ids: 'true',
    team_id: process.env.CLICKUP_TOCA_TEAM_ID,
  }).toString();

  console.log('setting tag: ', tag_name);

  return fetch(
    `https://api.clickup.com/api/v2/task/${task_id}/tag/${tag_name}?${query}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: process.env.CLICKUP_API_KEY,
      },
    },
  );
};

/**
 * Comment on a ClickUp task.
 * @param {Task} task - The ClickUp task to comment on.
 * @param {string} team_id - The ID of the team that the task belongs to.
 * @returns {Promise<void>} - A Promise that resolves with no value when the comment is posted.
 */
const commentOnTask = async (task_id: string, team_id: string, comment_text: string) => {
  const query = new URLSearchParams({
    custom_task_ids: 'true',
    team_id,
  }).toString();

  return fetch(
    `https://api.clickup.com/api/v2/task/${task_id}/comment?${query}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: process.env.CLICKUP_API_KEY,
      },
      body: JSON.stringify({
        comment_text,
        notify_all: true,
      }),
    },
  );
};

/**
 * Handles incoming clickup task create/update.
 * @param {TagEvent} message - The incoming message to handle.
 * @returns {Promise<void>} - A Promise that resolves when the message is handled.
 */

const handleMessage = async (message: TagEvent): Promise<void> => {
  // Construct query parameters for API request
  const query = new URLSearchParams({
    custom_task_ids: 'true',
    team_id: process.env.CLICKUP_TOCA_TEAM_ID,
    include_subtasks: 'true',
  });

  try {
    // Send GET request to ClickUp API for task details
    const resp = await fetch(
      `https://api.clickup.com/api/v2/task/${message.task_id}?${query}`,
      {
        method: 'GET',
        headers: {
          Authorization: process.env.CLICKUP_API_KEY,
        },
      },
    );
    const task: Task = await resp.json();

    // Check if correct tag is present and no automation has been done yet
    const correctTagPresent = task.tags.some(tag => tag.name === 'automation-new-center');
    const noAutomationDone = !task.tags.some(tag => tag.name === 'automation-complete');

    if (correctTagPresent && noAutomationDone) {
      console.info(`🚀 Correct tag has been seen on task: ${task.name}. Ready to create a new center!`);
      comment = `🚀 Correct tag has been seen on task: ${task.name}. Ready to create a new center!`;

      // Comment on the task
      await commentOnTask(task.id, process.env.CLICKUP_TOCA_TEAM_ID, comment);
      console.info('Comment posted');

      // Create Hubspot form and get its ID
      const centerName = task.custom_fields.find(f => f.name === 'Center Name').value;
      const setHubspotForm = await createHubspotForm(centerName);
      const HSForm = await setHubspotForm.json() as unknown as HSForm;

      console.info('Hubspot form created: ', JSON.stringify(HSForm))
      console.log('Phone number: ', JSON.stringify(task.custom_fields.find(f => f.name === 'Center Phone')))

      const _template = task.custom_fields.find(f => f.name === 'Center Template');
      
      // Call main function with necessary details
      await setNewCenter({
        address: task.custom_fields.find(f => f.name === 'Center Address').value,
        phone: task.custom_fields.find(f => f.name === 'Center Phone').value,
        template: _template.type_config.options[Number(_template.value)].name,
        name: centerName,
        hubspotFormID: HSForm.guid
      });

      // Set tag to indicate automation is complete
      await setPostTag(task.id, 'automation-complete');

      // Add completion comment to task
      comment = `🚀 Center visible at: https://www.tocafootball.com/centers/${centerName.toLowerCase()}`;
      await commentOnTask(task.id, process.env.CLICKUP_TOCA_TEAM_ID, comment);
    } else {
      console.info(`💤 Incorrect tag has been seen. We are not ready to create a new center.`);
    }
  } catch (error) {
    console.error(JSON.stringify(error));
  }
};


export { handleMessage };
