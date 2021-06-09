import { Request, Response } from 'express';
import Reading from '../../../models/Reading';
import errorCreator from '../../utils/errorCreator';
import getUniques from '../../utils/getUniques';

/*
@route    GET /api/serial
@desc     Get all unique serial numbers
@access   public
*/
const getAllSer = async (req: Request, res: Response): Promise<Response> => {
  // Get serial numbers
  let results;
  const settings = getUniques('Serial_Number');
  try {
    results = await Reading.findAll(settings);
  } catch (error) {
    return errorCreator(500, 'An error occurred. Please try again later', res);
  }

  return res.status(200).json({ type: 'SUCCESS', results });
};

export default getAllSer;
