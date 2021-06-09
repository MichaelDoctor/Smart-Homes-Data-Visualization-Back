import { Response } from 'express';
import {
  FindAttributeOptions, FindOptions, Sequelize, Order,
} from 'sequelize';
import Reading from '../../models/Reading';
import errorCreator from './errorCreator';

// Filter columns
export type Filters = 'Serial_Number' | 'Device_ID';

// FindOptions return type
interface UniqueOptions {
    attributes: FindAttributeOptions,
    order: Order
}

const getUniqueResponse = async (
  column: Filters,
  res: Response,
): Promise<Response> => {
  let results;

  // unique versions of columns
  const settings: FindOptions<UniqueOptions> = {
    attributes: [[Sequelize.fn('DISTINCT', Sequelize.col(column)), column]],
    order: Sequelize.col(column),
  };

  try {
    results = await Reading.findAll(settings);
  } catch (error) {
    return errorCreator(500, 'An error occurred. Please try again later', res);
  }

  return res.status(200).json({ type: 'SUCCESS', results });
};

export default getUniqueResponse;
