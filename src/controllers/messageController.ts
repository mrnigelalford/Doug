import { TagEvent } from "../types/webhook";
import { Task } from "../types/clickupTask";
import * as dotenv from 'dotenv'

dotenv.config()

/**
 * Handles incoming clickup task create/update.
 * @param {TagEvent} message - The incoming message to handle.
 * @returns {Promise<void>} - A Promise that resolves when the message is handled.
 */

const handleMessage = async (message: TagEvent): Promise<void> => {
  const query = new URLSearchParams({
    custom_task_ids: "true",
    team_id: process.env.CLICKUP_TOCA_TEAM_ID,
    include_subtasks: "true",
  }).toString();

  let resp: Response;
  try {
    resp = await fetch(
      `https://api.clickup.com/api/v2/task/${message.task_id}?${query}`,
      {
        method: "GET",
        headers: {
          Authorization: process.env.CLICKUP_API_KEY,
        },
      }
    );
  } catch (error) {
    console.log(error);
    return;
  }
  const data: Task = await resp.json();

  if (data.tags.filter((tag) => tag.name === "automation-new-center").length) {
    console.log(
      `🚀 Correct tag has been on task: ${data.name}. Ready to create a new center!`
    );
    await commentOnTask(data.id, "36109037");
  } else {
    console.log(
      `💤 incorrect tag has been seen. We are not ready to create a new center`
    );
  }
};

/**
 * Comment on a ClickUp task.
 * @param {Task} task - The ClickUp task to comment on.
 * @param {string} team_id - The ID of the team that the task belongs to.
 * @returns {Promise<void>} - A Promise that resolves with no value when the comment is posted.
 */
const commentOnTask = async (task_id: string, team_id: string) => {
  console.log('comment received: ', task_id, ' : ', team_id)
  const query = new URLSearchParams({
    custom_task_ids: "true",
    team_id: '36109037',
  }).toString();

  const resp = await fetch(
    `https://api.clickup.com/api/v2/task/${task_id}/comment?${query}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: 'pk_38277878_6WRS4IDMB54FS5TS9IEQ5MOIFLXB842K',
      },
      body: JSON.stringify({
        comment_text:
          "Great news! We will create a new center. Progess will be commented here.",
        assignee: process.env.CLICKUP_NIGEL, // Nigel Alford ID
        notify_all: true,
      }),
    }
  );

  console.log(await resp.json());
};

export { handleMessage };
