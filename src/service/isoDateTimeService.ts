//import * as moment from 'moment';
const moment = require('moment');

export const IsoDateTime = () => {
  const timestamp = moment().toISOString();
  return timestamp;
};
