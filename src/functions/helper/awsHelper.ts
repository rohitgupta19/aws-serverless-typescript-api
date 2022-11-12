export const getCurrentAWSRegion = () => {
  const region_code = process.env.AWS_REGION;
  return region_code;
};
