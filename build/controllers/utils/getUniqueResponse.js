"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const Reading_1 = __importDefault(require("../../models/Reading"));
const errorCreator_1 = __importDefault(require("./errorCreator"));
const getUniqueResponse = async (column, res) => {
    let results;
    // unique versions of columns
    const settings = {
        attributes: [[sequelize_1.Sequelize.fn('DISTINCT', sequelize_1.Sequelize.col(column)), column]],
        order: sequelize_1.Sequelize.col(column),
    };
    try {
        results = await Reading_1.default.findAll(settings);
    }
    catch (error) {
        return errorCreator_1.default(500, 'An error occurred. Please try again later', res);
    }
    return res.status(200).json({ type: 'SUCCESS', results });
};
exports.default = getUniqueResponse;
