const isoDateService = require('../../service/isoDateTimeService');
const awsHelper = require('../helper/awsHelper');

export async function handler(): Promise<any> {
  const isoDateTime = isoDateService.IsoDateTime();
  const region = awsHelper.getCurrentAWSRegion();
  const resp = {
    timestamp: isoDateTime,
    region: region
  };
  return {
    statusCode: 200,
    body: JSON.stringify(resp)
  };
}
