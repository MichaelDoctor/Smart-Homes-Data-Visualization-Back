import express from 'express';
import { config } from 'dotenv';
import apiRouter from './controllers/routes/api';
import connectDB from './config/dbConfig';

config();

const PORT = 3000 || process.env.PORT;
const app = express();

// Check DB accessability
const checkDB = async (): Promise<void> => {
  try {
    await connectDB();
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json({ type: 'application/json' }));

    // Api endpoints
    app.use('/api', apiRouter);

    app.listen(PORT, (): void => {
      console.log(`Server Running on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

checkDB();

export default app;
