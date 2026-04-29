const pipe =
  (...fns) =>
  (val) =>
    fns.reduce((cv, cf) => cf(cv), val);

export default pipe;
