import { Request, Response } from 'express';
import getUniqueResponse from '../../utils/getUniqueResponse';

/*
@route    GET /api/serial
@desc     Get all unique serial numbers
@access   public
*/
const getAllSer = async (
  req: Request,
  res: Response,
): Promise<Response> => getUniqueResponse('Serial_Number', res);

export default getAllSer;
