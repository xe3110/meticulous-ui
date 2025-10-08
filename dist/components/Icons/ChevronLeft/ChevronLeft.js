import { j as r } from "../../../_virtual/jsx-runtime.js";
import i from "../../../node_modules/styled-components/dist/styled-components.browser.esm.js";
import { GREY as s } from "../../../colors/index.js";
const l = i.img`
  display: inline-block;
  vertical-align: middle;
  fill: ${({ color: o }) => o};
`, a = (o) => {
  const { color: e, size: t } = o;
  return /* @__PURE__ */ r.jsx(
    l,
    {
      ...o,
      color: e || s,
      src: "https://www.svgrepo.com/show/533659/chevron-left.svg",
      alt: "Chevron Left",
      width: t,
      height: t
    }
  );
};
export {
  a as default
};
//# sourceMappingURL=ChevronLeft.js.map
