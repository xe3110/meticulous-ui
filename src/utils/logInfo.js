const logInfo = (message, context = {}) => {
  const entry = { level: 'info', message, ...context, timestamp: new Date().toISOString() };
  if (typeof window !== 'undefined' && typeof window.__logger?.info === 'function') {
    window.__logger.info(entry);
  } else {
    console.info('[logInfo]', entry);
  }
  return entry;
};

export default logInfo;
