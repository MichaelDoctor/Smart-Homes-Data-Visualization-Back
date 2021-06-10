"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const dotenv_1 = require("dotenv");
const sequelize_1 = require("sequelize");
// Get env variables
dotenv_1.config();
// Get Postgres related envs
const { PG_HOST, PG_PORT, PG_DB, PG_USER, PG_PASSWORD, SSL_MODE, } = process.env;
const checkEnvsExists = () => {
    if (!PG_HOST || !PG_PORT || !PG_DB || !PG_USER || !PG_PASSWORD || !SSL_MODE) {
        return false;
    }
    return true;
};
// Instantiate new sequelize
exports.sequelize = new sequelize_1.Sequelize(String(PG_DB), String(PG_USER), String(PG_PASSWORD), {
    host: String(PG_HOST),
    port: Number(PG_PORT),
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
});
// Check if connection to db can be made
const connectDB = async () => {
    if (checkEnvsExists()) {
        try {
            await exports.sequelize.authenticate();
        }
        catch {
            throw new Error('Unable to connect to the database.');
        }
        return;
    }
    throw new Error('Unable to connect to db. Env variables required.');
};
exports.default = connectDB;
