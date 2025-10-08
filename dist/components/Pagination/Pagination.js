import { j as c } from "../../_virtual/jsx-runtime.js";
import f from "../../node_modules/lodash-es/range.js";
import { renderPageNum as o, renderThreeDots as C } from "./helpers.js";
import { AllPages as s, ClickableChevronLeft as k, ClickableChevronRight as h } from "./styles.js";
const R = ({ pageNumber: i, setPageNumber: x, totalPages: n }) => {
  const j = () => {
    i > 1 && x(i - 1);
  }, d = () => {
    i < n && x(i + 1);
  };
  return n <= 7 ? /* @__PURE__ */ c.jsxs(s, { children: [
    /* @__PURE__ */ c.jsx(k, { onClick: j }),
    f(1, n + 1).map(o(i, x)),
    /* @__PURE__ */ c.jsx(h, { onClick: j })
  ] }) : n < 10 || i < 4 || i > n - 3 && i <= n ? /* @__PURE__ */ c.jsxs(s, { children: [
    /* @__PURE__ */ c.jsx(
      k,
      {
        size: 20,
        onClick: j
      }
    ),
    f(1, 5).map(o(i, x)),
    C(),
    [n - 3, n - 2, n - 1, n].map(
      o(i, x)
    ),
    /* @__PURE__ */ c.jsx(
      h,
      {
        size: 20,
        onClick: d
      }
    )
  ] }) : /* @__PURE__ */ c.jsxs(s, { children: [
    /* @__PURE__ */ c.jsx(
      k,
      {
        size: 20,
        onClick: j
      }
    ),
    f(1, 3).map(o(i, x)),
    C(),
    [i - 1, i, i + 1].map(o(i, x)),
    C(),
    [n - 1, n].map(o(i, x)),
    /* @__PURE__ */ c.jsx(
      h,
      {
        size: 20,
        onClick: d
      }
    )
  ] });
};
export {
  R as default
};
//# sourceMappingURL=Pagination.js.map
