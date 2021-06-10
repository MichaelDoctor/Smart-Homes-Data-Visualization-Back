"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getUniqueResponse_1 = __importDefault(require("../../utils/getUniqueResponse"));
/*
@route    GET /api/id
@desc     Get all unique ids
@access   public
*/
const getAllIds = async (req, res) => getUniqueResponse_1.default('Device_ID', res);
exports.default = getAllIds;
