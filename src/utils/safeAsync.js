const safeAsync =
  (fn) =>
  async (...args) => {
    try {
      const result = await fn(...args);
      return [null, result];
    } catch (err) {
      return [err, null];
    }
  };

export default safeAsync;
