import r, { css as o } from "../../node_modules/styled-components/dist/styled-components.browser.esm.js";
import i from "../Icons/ChevronLeft/ChevronLeft.js";
import n from "../Icons/ChevronRight/ChevronRight.js";
import { WHITE as c, TEAL as s, GREY as t } from "../../colors/index.js";
const d = r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  min-width: 175rem;
  width: 175rem;
`, h = r.div`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  padding-top: 0.6rem;
  text-align: center;
  font-size: 1.4rem;
  ${({ isSelected: e }) => e ? o`
          cursor: auto;
          color: ${c};
          background-color: ${s};
        ` : o`
          cursor: pointer;
          color: ${t};
        `}
`, g = r.p`
  color: ${t};
`, f = r(i)`
  cursor: pointer;
`, u = r(n)`
  cursor: pointer;
`;
export {
  d as AllPages,
  f as ClickableChevronLeft,
  u as ClickableChevronRight,
  g as P,
  h as Page
};
//# sourceMappingURL=styles.js.map
