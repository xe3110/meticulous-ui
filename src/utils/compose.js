const compose =
  (...funcs) =>
  (val) =>
    funcs.reduceRight((cv, cf) => cf(cv), val);

export default compose;
