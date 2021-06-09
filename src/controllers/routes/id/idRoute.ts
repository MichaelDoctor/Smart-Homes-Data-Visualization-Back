import { Request, Response } from 'express';
import getUniqueResponse from '../../utils/getUniqueResponse';

/*
@route    GET /api/id
@desc     Get all unique ids
@access   public
*/
const getAllIds = async (
  req: Request,
  res: Response,
): Promise<Response> => getUniqueResponse('Device_ID', res);

export default getAllIds;
