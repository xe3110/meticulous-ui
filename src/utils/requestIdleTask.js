const requestIdleTask = (fn) => {
  if (typeof requestIdleCallback !== 'undefined') {
    requestIdleCallback(fn);
  } else {
    setTimeout(fn, 1);
  }
};

export default requestIdleTask;
