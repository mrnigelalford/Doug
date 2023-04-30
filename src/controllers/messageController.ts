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
  console.log('task: ', JSON.stringify(data.tags));

  if (data.tags.filter((tag) => tag.name === "automation-new-center").length) {
    console.log(
      `🚀 Correct tag ${data.name} has been flagged and we are ready to create a new center`
    );
    await commentOnTask(data, "36109037");
  } else {
    console.log(
      `💤 incorrect tag ${data.name} has been see. We are not ready to create a new center`
    );
  }
};

/**
 * Comment on a ClickUp task.
 * @param {Task} task - The ClickUp task to comment on.
 * @param {string} team_id - The ID of the team that the task belongs to.
 * @returns {Promise<void>} - A Promise that resolves with no value when the comment is posted.
 */
const commentOnTask = async (task: Task, team_id: string) => {
  const query = new URLSearchParams({
    custom_task_ids: "true",
    team_id,
  }).toString();

  const resp = await fetch(
    `https://api.clickup.com/api/v2/task/${task.id}/comment?${query}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.CLICKUP_API_KEY,
      },
      body: JSON.stringify({
        comment_text:
          "Great news! We are starting the process of creating a new center for this task. We will keep you updated on the progress.",
        assignee: process.env.CLICKUP_NIGEL, // Nigel Alford ID
        notify_all: true,
      }),
    }
  );

  console.log(await resp.json());
};

export { handleMessage };
