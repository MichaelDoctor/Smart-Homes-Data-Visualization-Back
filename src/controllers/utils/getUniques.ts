import {
  FindAttributeOptions, FindOptions, Sequelize, Order,
} from 'sequelize';

// Filter columns
export type Filters = 'Serial_Number' | 'Device_ID';

// FindOptions return type
interface UniqueOptions {
    attributes: FindAttributeOptions,
    order: Order
}

// return unique version of the columns
const getUniques = (column: Filters): FindOptions<UniqueOptions> => ({
  attributes: [[Sequelize.fn('DISTINCT', Sequelize.col(column)), column]],
  order: Sequelize.col(column),
});

export default getUniques;
