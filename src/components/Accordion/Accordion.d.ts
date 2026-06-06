import { ReactNode } from 'react';

export interface AccordionItem {
  id: string | number;
  title: ReactNode;
  content: ReactNode;
  icon?: ReactNode;
  /** Color applied to the icon — defaults to black.m700 */
  iconColor?: string;
  /** Background color of the icon box for this item — overrides accordion-level iconBackground */
  iconBackground?: string;
}

export interface AccordionProps {
  items?: AccordionItem[];
  allowMultiple?: boolean;
  /** Background color applied to the expanded item — use a token from the colors palette e.g. blue.m50 */
  activeBackground?: string;
  /** Default icon color for all items — overridden per-item via item.iconColor. Defaults to black.m700 */
  iconColor?: string;
  /** Default icon box background for all items — overridden per-item via item.iconBackground */
  iconBackground?: string;
  /** Background color for resting (closed) items. Defaults to '#fff' — use a palette token e.g. blueGray.m800 for dark mode */
  itemBackground?: string;
  /** Border color for all items — use a palette token e.g. blueGray.m600 for dark mode */
  itemBorderColor?: string;
  /** Title and chevron text color — use a light palette token e.g. blueGray.m100 for dark mode */
  titleColor?: string;
  /** Body content text color — use a muted light token e.g. blueGray.m300 for dark mode */
  bodyColor?: string;
}

declare const Accordion: (props: AccordionProps) => JSX.Element;
export default Accordion;
