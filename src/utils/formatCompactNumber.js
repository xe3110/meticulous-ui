const formatCompactNumber = (num, locale = 'en-US') => {
  if (typeof num !== 'number') return num;
  return new Intl.NumberFormat(locale, { notation: 'compact', compactDisplay: 'short' }).format(
    num
  );
};

export default formatCompactNumber;
