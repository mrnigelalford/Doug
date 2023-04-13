import { GoogleAuth } from 'google-auth-library';
import { chat } from '@googleapis/chat';
import { logger } from '../config/logger';
import { Message } from '../types/message';

// Initialize Google Chat API client
const auth = new GoogleAuth({
  scopes: ['https://www.googleapis.com/auth/chat.bot'],
});
const gChat = chat({
  version: 'v1',
  auth,
});


const sendMessage = async (message: any, spaceName: string) => {
  try {
    await gChat.spaces.messages.create({
      parent: spaceName,
      requestBody: {
        text: message.text,
      },
    });
    logger.info(`Sent message to space ${spaceName}: ${message.text}`);
  } catch (error) {
    logger.error(`Error sending message to space ${spaceName}: ${error.message}`);
  }
};

const handleMessage = async (message: Message) => {
  // Ignore messages from the bot itself
  if (message.user.displayName === 'Doug') {
    return;
  }

  logger.log('info', `Doug message handling: ${message.message}`);
  logger.log('info', `Doug message : ${JSON.stringify(message)}`);
  // Handle commands
  if (message.message.text?.startsWith('@Doug')) {
    const command = message.message.text.split(' ')[1];

    switch (command) {
      case 'help':
        await sendHelpMessage(message.space.name, message.user.displayName);
        break;
      case 'ping':
        await sendPingMessage(message.space.name, message.user.displayName);
        break;
      default:
        await sendUnknownCommandMessage(message.space.name, message.user.displayName);
        break;
    }
  }
};

const sendHelpMessage = async (spaceId: string, displayName: string) => {
  const message = {
    text: `Hello ${displayName}! Here are the available commands:
- @Doug help: Show this message
- @Doug ping: Send a "pong" message`,
  };
  await sendMessage(message, spaceId);
};

const sendPingMessage = async (spaceId: string, displayName: string) => {
  const message = {
    text: `Pong! This is ${displayName}.`,
  };
  await sendMessage(message, spaceId);
};

const sendUnknownCommandMessage = async (spaceId: string, displayName: string) => {
  const message = {
    text: `Sorry ${displayName}, I don't understand that command. Try "@Doug help" for a list of available commands.`,
  };
  await sendMessage(message, spaceId);
};

export { handleMessage };
