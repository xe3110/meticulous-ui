const logError = (error, context = {}) => {
  const msg = error instanceof Error ? error.message : String(error);
  const stack = error instanceof Error ? error.stack : undefined;
  console.error('[logError]', msg, { ...context, stack });
};

export default logError;
