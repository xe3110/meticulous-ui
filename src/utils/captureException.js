const captureException = (error, context = {}) => {
  const entry = {
    message: error instanceof Error ? error.message : String(error),
    stack: error instanceof Error ? error.stack : undefined,
    timestamp: new Date().toISOString(),
    ...context,
  };

  if (typeof window !== 'undefined' && typeof window.__captureException === 'function') {
    window.__captureException(entry);
  } else {
    console.error('[captureException]', entry);
  }

  return entry;
};

export default captureException;
