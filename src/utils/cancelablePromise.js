const cancelablePromise = (promise) => {
  let canceled = false;
  const wrapper = new Promise((resolve, reject) => {
    promise.then(
      (value) => (canceled ? reject({ canceled: true }) : resolve(value)),
      (err) => (canceled ? reject({ canceled: true }) : reject(err))
    );
  });
  return {
    promise: wrapper,
    cancel: () => {
      canceled = true;
    },
  };
};

export default cancelablePromise;
