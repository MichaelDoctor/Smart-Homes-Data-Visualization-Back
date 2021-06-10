"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getUniqueResponse_1 = __importDefault(require("../../utils/getUniqueResponse"));
/*
@route    GET /api/serial
@desc     Get all unique serial numbers
@access   public
*/
const getAllSer = async (req, res) => getUniqueResponse_1.default('Serial_Number', res);
exports.default = getAllSer;
