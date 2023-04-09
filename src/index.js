"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var google_auth_library_1 = require("google-auth-library");
var express = require("express");
var logger_1 = require("./config/logger");
var messageRoutes_1 = require("./routes/messageRoutes");
var app = express();
var port = process.env.PORT || 8080;
// Initialize Google Chat API client
var auth = new google_auth_library_1.GoogleAuth({
    scopes: ['https://www.googleapis.com/auth/chat.bot'],
});
// const gChat = chat({
//   version: 'v1',
//   auth,
// });
// Use middleware to parse JSON request body
app.use(express.json());
// Use messageRoutes for handling incoming chat events
app.use('/webhook', messageRoutes_1.messageRoutes);
app.get('/', function (req, res) {
    res.send('Welcome to the home of Doug');
});
// Handle unrecognized routes with a 404 error
app.use(function (req, res, next) {
    var error = new Error("Route not found: ".concat(req.originalUrl));
    res.status(404);
    next(error);
});
// Handle errors and log them with Winston
app.use(function (error, req, res, next) {
    logger_1.logger.error("".concat(error.message, " - ").concat(req.originalUrl, " - ").concat(req.method, " - ").concat(req.ip));
    res.status(res.statusCode || 500);
    res.json({
        error: error.message,
    });
});
// Start the server and log a message
app.listen(port, function () {
    logger_1.logger.info("Doug is listening on port ".concat(port));
    // gChat.spaces.list().then((response) => {
    //   logger.info(`Connected to Google Chat API as ${response.data.nextPageToken}`);
    // });
});
