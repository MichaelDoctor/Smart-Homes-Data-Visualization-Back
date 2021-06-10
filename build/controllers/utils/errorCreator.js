"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// creates an error response
const errorCreator = (statusCode, message, res) => res.status(statusCode).json({
    type: 'ERROR',
    statusCode,
    message,
});
exports.default = errorCreator;
