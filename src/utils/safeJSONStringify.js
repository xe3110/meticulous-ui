const safeJSONStringify = (obj, fallback = '', space) => {
  try {
    return JSON.stringify(obj, null, space);
  } catch {
    return fallback;
  }
};

export default safeJSONStringify;
