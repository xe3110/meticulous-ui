const createPubSub = () => {
  const listeners = {};

  const subscribe = (event, handler) => {
    (listeners[event] ??= []).push(handler);
    return () => {
      listeners[event] = listeners[event].filter((h) => h !== handler);
    };
  };

  const publish = (event, ...args) => {
    (listeners[event] ?? []).forEach((h) => h(...args));
  };

  return { subscribe, publish };
};

export default createPubSub;
