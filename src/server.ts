import express, { Request, Response } from 'express';
import { config } from 'dotenv';
import apiRouter from './controllers/routes/api';
import connectDB, { sequelize } from './config/dbConfig';

config();

const PORT = 3000 || process.env.PORT;
const app = express();

// connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ type: 'application/json' }));
app.use('/api', apiRouter);

app.listen(PORT, (): void => {
  console.log(`Server Running on port ${PORT}`);
});

export default app;
