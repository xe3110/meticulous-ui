const fallback = (value, defaultValue) =>
  value !== null && value !== undefined && value !== '' ? value : defaultValue;

export default fallback;
