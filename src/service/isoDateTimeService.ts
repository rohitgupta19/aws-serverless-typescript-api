import * as moment from 'moment';

export const IsoDateTime = () => {
  const timestamp = moment().toISOString();
  return timestamp;
};
