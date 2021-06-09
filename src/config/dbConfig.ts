import { config } from 'dotenv';
import { Sequelize } from 'sequelize';

// Get env variables
config();

// Get Postgres related envs
const {
  PG_HOST, PG_PORT, PG_DB, PG_USER, PG_PASSWORD, SSL_MODE,
} = process.env;

const checkEnvsExists = (): boolean => {
  if (!PG_HOST || !PG_PORT || !PG_DB || !PG_USER || !PG_PASSWORD || !SSL_MODE) {
    return false;
  }
  return true;
};

export const sequelize = new Sequelize(
  String(PG_DB),
  String(PG_USER),
  String(PG_PASSWORD),
  {
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
  },
);

const connectDB = async (): Promise<void> => {
  if (checkEnvsExists()) {
    try {
      // Check if connection can be made
      await sequelize.authenticate();
    } catch {
      throw new Error('Unable to connect to the database.');
    }
    return;
  }
  throw new Error('Unable to connect to db. Env variables required.');
};

export default connectDB;
