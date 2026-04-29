const singleton = (factory) => {
  let instance;
  return () => {
    if (instance === undefined) instance = factory();
    return instance;
  };
};

export default singleton;
