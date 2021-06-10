import { Request, Response, NextFunction } from 'express';

const crossOrigin = (req: Request, res: Response, next: NextFunction): void => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET',
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  // if (req.method === 'OPTIONS') {
  //   return res.sendStatus(200);
  // }
  next();
};

export default crossOrigin;
