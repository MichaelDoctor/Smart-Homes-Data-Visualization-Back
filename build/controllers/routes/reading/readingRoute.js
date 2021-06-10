"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const moment_1 = __importDefault(require("moment"));
const Reading_1 = __importDefault(require("../../../models/Reading"));
const errorCreator_1 = __importDefault(require("../../utils/errorCreator"));
const getFilters_1 = require("./getFilters");
/*
@route    GET /api/reading
@route    GET /api/reading?day=2019-04-30&sn=M709000844&id=99941666
@desc     Get data for earliest recording (2019-04-29)
@access   public
*/
const defaultRoute = async (req, res) => {
    const { day, sn, id } = req.query;
    // Get specific date
    let date = null;
    if (day) {
        const format = 'YYYY-MM-DD';
        if (!moment_1.default(String(day), format, true).isValid()) {
            return errorCreator_1.default(400, 'Invalid day format', res);
        }
        date = String(day);
    }
    // Earliest date entry =  default (no query). All Day
    const startDate = moment_1.default(`${date || '2019-04-29'}T00:00:00.000Z`)
        .subtract(6, 'h');
    const endDate = moment_1.default(`${date || '2019-04-29'}T23:59:00.000Z`)
        .subtract(6, 'h');
    // Change filter
    let whereOptions = {
        DateTime: {
            [sequelize_1.Op.gte]: startDate,
            [sequelize_1.Op.lte]: endDate,
        },
    };
    if (sn && id) {
        // type = 'BOTH';
        whereOptions = getFilters_1.getBoth(sn, id, whereOptions);
    }
    else if (sn) {
        // type = 'SN';
        whereOptions = getFilters_1.getSingle(sn, whereOptions, 'Serial_Number');
    }
    else if (id) {
        // type = 'ID';
        whereOptions = getFilters_1.getSingle(id, whereOptions, 'Device_ID');
    }
    // Get readings
    let results;
    try {
        results = await Reading_1.default.findAll({
            attributes: [
                'Serial_Number',
                'DateTime',
                'Device_ID',
                'User_Device_Name',
                'Wattage',
            ],
            order: sequelize_1.Sequelize.col('DateTime'),
            where: whereOptions,
        });
    }
    catch (error) {
        return errorCreator_1.default(500, 'An error occurred. Please try again later', res);
    }
    return res.status(200).json({ type: 'SUCCESS', results });
};
exports.default = defaultRoute;
