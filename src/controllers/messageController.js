"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleMessage = void 0;
var google_auth_library_1 = require("google-auth-library");
var chat_1 = require("@googleapis/chat");
var logger_1 = require("../config/logger");
// Initialize Google Chat API client
var auth = new google_auth_library_1.GoogleAuth({
    scopes: ['https://www.googleapis.com/auth/chat.bot'],
});
var gChat = (0, chat_1.chat)({
    version: 'v1',
    auth: auth,
});
var handleMessage = function (message) { return __awaiter(void 0, void 0, void 0, function () {
    var command, _a;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                // Ignore messages from the bot itself
                if (message.user.displayName === 'Doug') {
                    return [2 /*return*/];
                }
                if (!((_b = message.message.text) === null || _b === void 0 ? void 0 : _b.startsWith('@Doug'))) return [3 /*break*/, 7];
                command = message.message.text.split(' ')[1];
                _a = command;
                switch (_a) {
                    case 'help': return [3 /*break*/, 1];
                    case 'ping': return [3 /*break*/, 3];
                }
                return [3 /*break*/, 5];
            case 1: return [4 /*yield*/, sendHelpMessage(message.space.name, message.user.displayName)];
            case 2:
                _c.sent();
                return [3 /*break*/, 7];
            case 3: return [4 /*yield*/, sendPingMessage(message.space.name, message.user.displayName)];
            case 4:
                _c.sent();
                return [3 /*break*/, 7];
            case 5: return [4 /*yield*/, sendUnknownCommandMessage(message.space.name, message.user.displayName)];
            case 6:
                _c.sent();
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.handleMessage = handleMessage;
var sendHelpMessage = function (spaceId, displayName) { return __awaiter(void 0, void 0, void 0, function () {
    var message;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                message = {
                    text: "Hello ".concat(displayName, "! Here are the available commands:\n- @Doug help: Show this message\n- @Doug ping: Send a \"pong\" message"),
                };
                return [4 /*yield*/, sendMessage(message, spaceId)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var sendPingMessage = function (spaceId, displayName) { return __awaiter(void 0, void 0, void 0, function () {
    var message;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                message = {
                    text: "Pong! This is ".concat(displayName, "."),
                };
                return [4 /*yield*/, sendMessage(message, spaceId)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var sendUnknownCommandMessage = function (spaceId, displayName) { return __awaiter(void 0, void 0, void 0, function () {
    var message;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                message = {
                    text: "Sorry ".concat(displayName, ", I don't understand that command. Try \"@Doug help\" for a list of available commands."),
                };
                return [4 /*yield*/, sendMessage(message, spaceId)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var sendMessage = function (message, spaceId) { return __awaiter(void 0, void 0, void 0, function () {
    var error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, gChat.spaces.messages.create({
                        parent: "spaces/".concat(spaceId),
                        requestBody: {
                            text: message.text,
                        },
                    })];
            case 1:
                _a.sent();
                logger_1.logger.info("Sent message to space ".concat(spaceId, ": ").concat(message.text));
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                logger_1.logger.error("Error sending message to space ".concat(spaceId, ": ").concat(error_1.message));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
