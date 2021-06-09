import { Response } from 'express';

// creates an error response
const errorCreator = (
  statusCode: number,
  message: string,
  res: Response,
): Response => res.status(statusCode).json({
  type: 'ERROR',
  statusCode,
  message,
});

export default errorCreator;
