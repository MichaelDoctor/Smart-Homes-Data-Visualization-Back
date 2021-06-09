import { Request, Response } from 'express';
import { Sequelize, Op } from 'sequelize';
import moment from 'moment';
import Reading from '../../../models/Reading';
import errorCreator from '../../utils/errorCreator';

const defaultRoute = async (req: Request, res: Response): Promise<Response> => {
  let results;
  // Earliest date entry
  const startDate = moment('2019-04-29T00:00:00.000Z').subtract(6, 'h');
  const endDate = moment('2019-04-29T23:59:00.000Z').subtract(6, 'h');
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
      where: {
        DateTime: {
          [Op.gte]: startDate,
          [Op.lte]: endDate,
        },
      },
    });
  } catch (error) {
    return errorCreator(500, 'An error occurred. Please try again later', res);
  }

  return res.status(200).json({ type: 'Success', results });
};

export default defaultRoute;
