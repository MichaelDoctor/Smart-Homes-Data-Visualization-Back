import { Op, WhereOptions } from 'sequelize';
import { ParsedQs } from 'qs';

type Filters = 'Serial_Number' | 'Device_ID';

export const getBoth = (
  sn: string | ParsedQs | string[] | ParsedQs[] | undefined,
  id: string | ParsedQs | string[] | ParsedQs[] | undefined,
  whereOptions: WhereOptions<any>,
): WhereOptions<any> => ({
  ...whereOptions,
  Serial_Number: { [Op.eq]: String(sn) },
  Device_ID: { [Op.eq]: String(id) },
});

export const getSingle = (
  id: string | ParsedQs | string[] | ParsedQs[] | undefined,
  whereOptions: WhereOptions<any>,
  type: Filters,
): WhereOptions<any> => ({ ...whereOptions, [type]: { [Op.eq]: String(id) } });

export const getWhereNoFilter = (
  startDate: moment.Moment,
  endDate: moment.Moment,
): WhereOptions<any> => ({
  DateTime: {
    [Op.gte]: startDate,
    [Op.lte]: endDate,
  },
});
