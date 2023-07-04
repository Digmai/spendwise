export const isMobile = () => {
  const userAgent = window.navigator.userAgent;
  return /Mobi/i.test(userAgent);
};
