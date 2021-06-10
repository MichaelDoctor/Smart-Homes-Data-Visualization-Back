import express, { Request, Response } from 'express';
import { config } from 'dotenv';
import apiRouter from './controllers/routes/api';
import connectDB from './config/dbConfig';
import crossOrigin from './middleware/crossOrigin';

config();

const PORT = 5000 || process.env.PORT;
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
    app.use(express.static(`${__dirname}/frontend/build`));

    // Api endpoints
    app.use('/api', apiRouter);

    app.get('*',
      (
        req: Request,
        res: Response,
      ) => res.sendFile(`${__dirname}/frontend/build/index.html`));

    app.listen(PORT, (): void => {
      console.log(`Server Running on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

checkDB();

export default app;
