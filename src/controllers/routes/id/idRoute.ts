import { Request, Response } from 'express';
import Reading from '../../../models/Reading';
import errorCreator from '../../utils/errorCreator';
import getUniques from '../../utils/getUniques';

/*
@route    GET /api/id
@desc     Get all unique ids
@access   public
*/
const getAllIds = async (req: Request, res: Response): Promise<Response> => {
  // Get ids
  let results;
  const settings = getUniques('Device_ID');
  try {
    results = await Reading.findAll(settings);
  } catch (error) {
    return errorCreator(500, 'An error occurred. Please try again later', res);
  }

  return res.status(200).json({ type: 'SUCCESS', results });
};

export default getAllIds;
