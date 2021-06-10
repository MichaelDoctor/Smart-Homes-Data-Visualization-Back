"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSingle = exports.getBoth = void 0;
const sequelize_1 = require("sequelize");
// Both Filters used
const getBoth = (sn, id, whereOptions) => ({
    ...whereOptions,
    Serial_Number: { [sequelize_1.Op.eq]: String(sn) },
    Device_ID: { [sequelize_1.Op.eq]: String(id) },
});
exports.getBoth = getBoth;
// Only one filter used
const getSingle = (id, whereOptions, type) => ({
    ...whereOptions,
    [type]: { [sequelize_1.Op.eq]: String(id) },
});
exports.getSingle = getSingle;
