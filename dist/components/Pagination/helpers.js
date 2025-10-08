import { j as r } from "../../_virtual/jsx-runtime.js";
import { Page as i, P as t } from "./styles.js";
const l = (n, s) => (e) => {
  const c = () => {
    s(e);
  };
  return /* @__PURE__ */ r.jsx(i, { "data-testid": n === e ? "current-page" : `test-${e}`, isSelected: n === e, onClick: c, children: e });
}, x = () => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
  /* @__PURE__ */ r.jsx(t, { children: "." }),
  /* @__PURE__ */ r.jsx(t, { children: "." }),
  /* @__PURE__ */ r.jsx(t, { children: "." })
] });
export {
  l as renderPageNum,
  x as renderThreeDots
};
//# sourceMappingURL=helpers.js.map
