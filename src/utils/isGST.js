// Indian GST: 2-digit state code + PAN (10 chars) + 1 digit + Z + 1 alphanumeric
const isGST = (value) => {
  if (typeof value !== 'string') return false;
  return /^\d{2}[A-Z]{5}\d{4}[A-Z]{1}\d{1}Z[A-Z\d]{1}$/i.test(value.trim());
};

export default isGST;
