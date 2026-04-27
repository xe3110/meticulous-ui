const maskEmail = (str) => {
  if (typeof str !== 'string') return str;
  const [local, domain] = str.split('@');
  if (!domain) return str;
  return local.charAt(0) + '***@' + domain;
};

export default maskEmail;
