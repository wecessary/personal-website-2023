export const getDeviceType = (screenSize: number) => {
  const isPhone = screenSize <= 425;
  const isTablet = !isPhone && screenSize <= 768;
  return { isPhone, isTablet };
};
