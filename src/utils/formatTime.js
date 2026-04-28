const formatTime = (date, locale = 'en-US') => {
  const d = date instanceof Date ? date : new Date(date);
  if (isNaN(d)) return '';
  return new Intl.DateTimeFormat(locale, {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(d);
};

export default formatTime;
