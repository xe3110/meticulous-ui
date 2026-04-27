const formatDate = (date, locale = 'en-US') => {
  const d = date instanceof Date ? date : new Date(date);
  if (isNaN(d)) return '';
  return new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'long', day: 'numeric' }).format(d);
};

export default formatDate;
