const formatNumber = (num, locale = 'en-US') => {
  if (typeof num !== 'number') return num;
  return new Intl.NumberFormat(locale).format(num);
};

export default formatNumber;
