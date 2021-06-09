import { Op, WhereOptions } from 'sequelize';
import { ParsedQs } from 'qs';
import { Filters } from '../../utils/getUniqueResponse';

// Where Options
interface DateTimeOptions {
  [Op.gte]: moment.Moment;
  [Op.lte]: moment.Moment;
}
interface SerialOptions {
  [Op.eq]: string;
}
interface DeviceOptions {
  [Op.eq]: string;
}
export interface Options {
  DateTime: DateTimeOptions;
  // eslint-disable-next-line camelcase
  Serial_Number?: SerialOptions;
  // eslint-disable-next-line camelcase
  Device_ID?: DeviceOptions;
}

// Both Filters used
export const getBoth = (
  sn: string | ParsedQs | string[] | ParsedQs[] | undefined,
  id: string | ParsedQs | string[] | ParsedQs[] | undefined,
  whereOptions: WhereOptions<Options>,
): WhereOptions<Options> => ({
  ...whereOptions,
  Serial_Number: { [Op.eq]: String(sn) },
  Device_ID: { [Op.eq]: String(id) },
});

// Only one filter used
export const getSingle = (
  id: string | ParsedQs | string[] | ParsedQs[] | undefined,
  whereOptions: WhereOptions<Options>,
  type: Filters,
): WhereOptions<Options> => ({
  ...whereOptions,
  [type]: { [Op.eq]: String(id) },
});
