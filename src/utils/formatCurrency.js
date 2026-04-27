const formatCurrency = (num, currency = 'USD', locale = 'en-US') => {
  if (typeof num !== 'number') return num;
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(num);
};

export default formatCurrency;
