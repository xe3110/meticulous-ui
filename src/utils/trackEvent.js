const trackEvent = (name, payload = {}) => {
  const event = { name, payload, timestamp: new Date().toISOString() };
  if (typeof window !== 'undefined' && typeof window.__analytics?.track === 'function') {
    window.__analytics.track(event);
  } else {
    console.log('[trackEvent]', event);
  }
  return event;
};

export default trackEvent;
