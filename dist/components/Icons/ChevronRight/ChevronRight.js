import { j as r } from "../../../_virtual/jsx-runtime.js";
import e from "../../../node_modules/styled-components/dist/styled-components.browser.esm.js";
import { GREY as s } from "../../../colors/index.js";
const l = e.img`
  display: inline-block;
  vertical-align: middle;
  fill: ${({ color: o }) => o};
`, c = (o) => {
  const { color: i, size: t } = o;
  return /* @__PURE__ */ r.jsx(
    l,
    {
      ...o,
      color: i || s,
      src: "https://www.svgrepo.com/show/533661/chevron-right.svg",
      alt: "Chevron Right",
      width: t,
      height: t
    }
  );
};
export {
  c as default
};
//# sourceMappingURL=ChevronRight.js.map
