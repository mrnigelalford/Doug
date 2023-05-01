import { TagEvent } from "../types/webhook";
import { Task } from "../types/clickupTask";
import * as dotenv from "dotenv";
import main  from "../webflow/setCenterFlow";
import { Center } from "../types/webflow";

const inputs: Center = {
  address: "3601 W. 145th St. Burnsville, MN",
  centerName: "Burnsville",
  centerID: "001", // get this from the center slug
  hubspotFormID: "a0f0b0c0-d0e0-0000-0000-000000000000", // get this from the hubspot form
};

dotenv.config();

const setPostTag = async (task_id: string, tag_name: string) => {
  const query = new URLSearchParams({
    custom_task_ids: "true",
    team_id: process.env.CLICKUP_TOCA_TEAM_ID,
  }).toString();

  console.log("setting tag: ", tag_name);

  return fetch(
    `https://api.clickup.com/api/v2/task/${task_id}/tag/${tag_name}?${query}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.CLICKUP_API_KEY,
      },
    }
  );
};


/**
 * Comment on a ClickUp task.
 * @param {Task} task - The ClickUp task to comment on.
 * @param {string} team_id - The ID of the team that the task belongs to.
 * @returns {Promise<void>} - A Promise that resolves with no value when the comment is posted.
 */
const commentOnTask = async (task_id: string, team_id: string) => {
  const query = new URLSearchParams({
    custom_task_ids: "true",
    team_id,
  }).toString();

  return fetch(
    `https://api.clickup.com/api/v2/task/${task_id}/comment?${query}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.CLICKUP_API_KEY,
      },
      body: JSON.stringify({
        comment_text:
          "Great news! We will create a new center. Progess will be commented here.",
        assignee: 38277878, // Nigel Alford ID
        notify_all: true,
      }),
    }
  );
};

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

  const no_automation =
    data.tags.filter((tag) => tag.name === "automation-complete").length <= 0;

  if (
    data.tags.filter((tag) => tag.name === "automation-new-center").length &&
    no_automation
  ) {
    console.log(
      `🚀 Correct tag has been on task: ${data.name}. Ready to create a new center!`
    );
    await commentOnTask(data.id, process.env.CLICKUP_TOCA_TEAM_ID);
    console.log("comment posted");
    await main(inputs)
    await setPostTag(data.id, "automation-complete");
    console.log("tag set");
  } else {
    console.log(
      `💤 incorrect tag has been seen. We are not ready to create a new center`
    );
  }
};

export { handleMessage };
