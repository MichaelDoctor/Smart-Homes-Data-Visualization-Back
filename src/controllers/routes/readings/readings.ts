import { Request, Response } from 'express';
import { Sequelize, Op, WhereOptions } from 'sequelize';
import moment from 'moment';
import Reading from '../../../models/Reading';
import errorCreator from '../../utils/errorCreator';
import { getSingle, getBoth } from '../../utils/getFilters';

/*
@route    GET /api/reading
@route    GET /api/reading?day=2019-04-30&sn=M709000844&id=99941666
@desc     Get data for earliest recording (2019-04-29)
@access   public
*/
const defaultRoute = async (req: Request, res: Response): Promise<Response> => {
  let results;

  const { day, sn, id } = req.query;

  let date: string | null = null;

  if (day) {
    const format = 'YYYY-MM-DD';
    if (!moment(String(day), format, true).isValid()) {
      return errorCreator(400, 'Invalid day format', res);
    }
    date = String(day);
  }

  // Earliest date entry =  default (no query). All Day
  const startDate = moment(`${date || '2019-04-29'}T00:00:00.000Z`)
    .subtract(6, 'h');
  const endDate = moment(`${date || '2019-04-29'}T23:59:00.000Z`)
    .subtract(6, 'h');

  // Change filter
  let whereOptions: WhereOptions<any> = {
    DateTime: {
      [Op.gte]: startDate,
      [Op.lte]: endDate,
    },
  };

  if (sn && id) {
    // type = 'BOTH';
    whereOptions = getBoth(sn, id, whereOptions);
  } else if (sn) {
    // type = 'SN';
    whereOptions = getSingle(sn, whereOptions, 'Serial_Number');
  } else if (id) {
    // type = 'ID';
    whereOptions = getSingle(id, whereOptions, 'Device_ID');
  }

  try {
    results = await Reading.findAll({
      attributes: [
        'Serial_Number',
        'DateTime',
        'Device_ID',
        'User_Device_Name',
        'Wattage',
      ],
      order: Sequelize.col('DateTime'),
      where: whereOptions,
    });
  } catch (error) {
    return errorCreator(500, 'An error occurred. Please try again later', res);
  }

  return res.status(200).json({ type: 'SUCCESS', results });
};

export default defaultRoute;
