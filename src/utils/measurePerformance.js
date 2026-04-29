const measurePerformance = (metric) => {
  const entry =
    typeof performance !== 'undefined' ? (performance.getEntriesByName(metric)[0] ?? null) : null;
  const result = {
    metric,
    duration: entry?.duration ?? null,
    startTime: entry?.startTime ?? null,
    timestamp: new Date().toISOString(),
  };
  if (typeof window !== 'undefined' && typeof window.__performanceReporter === 'function') {
    window.__performanceReporter(result);
  } else {
    console.log('[measurePerformance]', result);
  }
  return result;
};

export default measurePerformance;
