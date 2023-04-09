import { Router } from 'express';
import { logger } from '../config/logger';
import { handleMessage } from '../controllers/messageController';

const messageRoutes = Router();

// Handle incoming chat events
messageRoutes.post('/', async (req, res) => {
  try {
    const message = req.body;
    await handleMessage(message);
    res.sendStatus(200);
  } catch (error) {
    logger.error(`Doug has an Error: ${error.message}`);
    res.sendStatus(500);
  }
});

export { messageRoutes };
