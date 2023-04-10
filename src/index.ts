import {GoogleAuth} from 'google-auth-library';
import express = require('express');
import { logger } from './config/logger';
import { messageRoutes } from './routes/messageRoutes';

const app = express();
const port = process.env.PORT || 8080;

// Initialize Google Chat API client
const auth = new GoogleAuth({
  scopes: ['https://www.googleapis.com/auth/chat.bot'],
});
// const gChat = chat({
//   version: 'v1',
//   auth,
// });

// Use middleware to parse JSON request body
app.use(express.json());

// Use messageRoutes for handling incoming chat events
app.use('/webhook', messageRoutes);
app.get('/', (req, res) => {
  res.send('Welcome to the home of Doug');
});

// Handle unrecognized routes with a 404 error
app.use((req, res, next) => {
  const error = new Error(`Route not found: ${req.originalUrl}`);
  res.status(404);
  next(error);
});

// Handle errors and log them with Winston
app.use((error: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  logger.error(`${error.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
  res.status(res.statusCode || 500);
  res.json({
    error: error.message,
  });
});

// Start the server and log a message
app.listen(port, () => {
  logger.info(`Doug is listening on port ${port}`);
  // gChat.spaces.list().then((response) => {
  //   logger.info(`Connected to Google Chat API as ${response.data.nextPageToken}`);
  // });
});

module.exports = { app };
