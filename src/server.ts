import express, { Request, Response } from 'express';
import { config } from 'dotenv';
import path from 'path';
import apiRouter from './controllers/routes/api';
import connectDB from './config/dbConfig';
import crossOrigin from './middleware/crossOrigin';

config();

const PORT = process.env.PORT || 5000;
const app = express();

// Check DB accessability
const checkDB = async (): Promise<void> => {
  try {
    await connectDB();
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json({ type: 'application/json' }));

    // Give React access to node
    app.use(crossOrigin);
    // Access React Frontend
    app.use(express.static(path.join(__dirname, 'views/build')));

    // Api endpoints
    app.use('/api', apiRouter);

    // Handles any requests that don't match the ones above
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(`${__dirname}/views/build/index.html`));
    });

    app.listen(PORT, (): void => {
      console.log(`Server Running on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

checkDB();

export default app;
