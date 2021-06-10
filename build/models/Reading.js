"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable camelcase */
const sequelize_1 = require("sequelize");
const dbConfig_1 = require("../config/dbConfig");
// Reading Model
const Reading = dbConfig_1.sequelize.define('reading', {
    Serial_Number: {
        primaryKey: true,
        type: sequelize_1.DataTypes.STRING,
    },
    DateTime: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    Device_ID: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    Device_Name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    User_Device_Name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    Device_Type: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    Device_Make: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    Device_Model: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    Device_Location: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    Wattage: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: false,
    },
}, {
    timestamps: false,
});
exports.default = Reading;
