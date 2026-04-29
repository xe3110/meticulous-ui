const safeJSONParse = (str, fallback = null) => {
  try {
    return JSON.parse(str);
  } catch {
    return fallback;
  }
};

export default safeJSONParse;
