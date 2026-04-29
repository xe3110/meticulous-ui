const logWarn = (message, context = {}) => {
  const entry = { level: 'warn', message, ...context, timestamp: new Date().toISOString() };
  if (typeof window !== 'undefined' && typeof window.__logger?.warn === 'function') {
    window.__logger.warn(entry);
  } else {
    console.warn('[logWarn]', entry);
  }
  return entry;
};

export default logWarn;
