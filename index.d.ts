import * as React from 'react';

// ---------------------------------------------------------------------------
// Color palette type
// ---------------------------------------------------------------------------

export interface ColorShades {
  m50?: string;
  m100?: string;
  m200?: string;
  m300?: string;
  m400?: string;
  m500?: string;
  m600?: string;
  m700?: string;
  m800?: string;
  m900?: string;
  a100?: string;
  a200?: string;
  a400?: string;
  a700?: string;
  [key: string]: string | undefined;
}

export type ThemeColor =
  | 'amber'
  | 'black'
  | 'blue'
  | 'blueGray'
  | 'brown'
  | 'cider'
  | 'cyan'
  | 'deepOrange'
  | 'deepPurple'
  | 'green'
  | 'grey'
  | 'indigo'
  | 'lightBlue'
  | 'lightGreen'
  | 'lime'
  | 'orange'
  | 'pink'
  | 'purple'
  | 'red'
  | 'teal'
  | 'violet'
  | 'white'
  | 'yellow';

export type ComponentSize = 'small' | 'medium' | 'large';

// ---------------------------------------------------------------------------
// Accordion
// ---------------------------------------------------------------------------

export interface AccordionItem {
  id: string | number;
  title: React.ReactNode;
  content: React.ReactNode;
  icon?: React.ReactNode;
  /** Color applied to the icon — defaults to black.m700 */
  iconColor?: string;
  /** Background color of the icon box for this item — overrides accordion-level iconBackground */
  iconBackground?: string;
}

export interface AccordionProps {
  items?: AccordionItem[];
  allowMultiple?: boolean;
  /** Background color applied to the expanded item — use a palette token e.g. blue.m50 */
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

export declare const Accordion: React.FC<AccordionProps>;

// ---------------------------------------------------------------------------
// Link
// ---------------------------------------------------------------------------

export interface LinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  label: string;
  theme?: ThemeColor;
  shade?: string;
  href?: string;
  disabled?: boolean;
  underline?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export declare const Link: React.FC<LinkProps>;

// ---------------------------------------------------------------------------
// Button
// ---------------------------------------------------------------------------

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ThemeColor | ColorShades;
  size?: ComponentSize;
  width?: string | number;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  textColor?: string;
  children?: React.ReactNode;
}

export declare const Button: React.FC<ButtonProps>;

// ---------------------------------------------------------------------------
// Pagination
// ---------------------------------------------------------------------------

export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  pageNumber: number;
  setPageNumber: (page: number) => void;
  totalPages: number;
  theme?: ThemeColor;
  size?: ComponentSize;
  isDisabled?: boolean;
}

export declare const Pagination: React.FC<PaginationProps>;

// ---------------------------------------------------------------------------
// Toast
// ---------------------------------------------------------------------------

export type ToastType = 'info' | 'success' | 'warning' | 'error';

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: ToastType;
  visible?: boolean;
  duration?: number;
  onExpire?: () => void;
  title?: string;
  subtitle?: string;
}

export interface ToastItem {
  id: string;
  type?: ToastType;
  title?: string;
  subtitle?: string;
  duration?: number;
  onExpire?: () => void;
}

export interface ToastContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  toasts: ToastItem[];
}

export declare const Toast: React.FC<ToastProps>;
export declare const ToastContainer: React.FC<ToastContainerProps>;

// ---------------------------------------------------------------------------
// Modal
// ---------------------------------------------------------------------------

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** String or any React element (e.g. heading + badge). Strings are wrapped in the default ModalTitle style; elements are rendered as-is. */
  title?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  footerAlign?: 'left' | 'center' | 'right';
  width?: string | number;
  closeOnOverlayClick?: boolean;
  showCloseButton?: boolean;
  /** On viewports ≤ 640 px the modal fills the screen width and slides up from the bottom. On desktop it behaves as a normal centered modal. */
  isFullOnMobile?: boolean;
}

export declare const Modal: React.FC<ModalProps>;

// ---------------------------------------------------------------------------
// Input
// ---------------------------------------------------------------------------

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  hasError?: boolean;
  name?: string;
  color?: ThemeColor;
  size?: string;
  disableAutoComplete?: boolean;
  helperText?: string;
  background?: string;
  outerBackground?: string;
  leftIcon?: string;
  rightIcon?: string;
  placeholder?: string;
}

export declare const Input: React.FC<InputProps>;

// ---------------------------------------------------------------------------
// Textarea
// ---------------------------------------------------------------------------

export interface TextareaProps extends Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  'cols' | 'rows'
> {
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  hasError?: boolean;
  name?: string;
  color?: ThemeColor;
  helperText?: string;
  background?: string;
  outerBackground?: string;
  isDynamic?: boolean;
  isResizeNone?: boolean;
  rows?: string | number;
  cols?: string | number;
  leftIcon?: string;
  rightIcon?: string;
  placeholder?: string;
}

export declare const Textarea: React.FC<TextareaProps>;

// ---------------------------------------------------------------------------
// Checkbox
// ---------------------------------------------------------------------------

export interface CheckboxProps extends Omit<React.HTMLAttributes<HTMLLabelElement>, 'onChange'> {
  label?: string;
  value?: boolean;
  color?: ThemeColor;
  textColor?: string;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
  tabIndex?: number;
  innerShade?: string;
  outerShade?: string;
}

export declare const Checkbox: React.FC<CheckboxProps>;

// ---------------------------------------------------------------------------
// RadioGroup
// ---------------------------------------------------------------------------

export interface RadioOption {
  label: string;
  value: string | number;
}

export interface RadioGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  options: RadioOption[];
  value: string | number;
  onChange: (value: string | number) => void;
  color?: ThemeColor;
  isHorizonatal?: boolean;
  label?: string;
  ariaLabel?: string;
  name?: string;
}

export declare const RadioGroup: React.FC<RadioGroupProps>;

// ---------------------------------------------------------------------------
// FileUploader
// ---------------------------------------------------------------------------

export interface FileUploaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  label?: string;
  labelColor?: string;
  theme?: ThemeColor | ColorShades;
  size?: ComponentSize;
  width?: string | number;
  isLoading?: boolean;
  disabled?: boolean;
  prefixIcon?: React.ComponentType;
  suffixIcon?: React.ComponentType;
  type?: string;
  accept?: string;
  isMultiple?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export declare const FileUploader: React.FC<FileUploaderProps>;

// ---------------------------------------------------------------------------
// Dropdown
// ---------------------------------------------------------------------------

export interface DropdownOption {
  label: string;
  value: string | number;
}

export interface DropdownProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  options: DropdownOption[];
  onChange: (value: string | number) => void;
  value?: string | number;
  width?: string;
  menuHeight?: string;
  placeholder?: string;
  theme?: ThemeColor;
  isLoading?: boolean;
  isDisabled?: boolean;
  loaderColor?: string;
  searchable?: boolean;
  onLoadMore?: () => void;
  hasMore?: boolean;
  isLoadingMore?: boolean;
  searchPh?: string;
}

export declare const Dropdown: React.FC<DropdownProps>;

// ---------------------------------------------------------------------------
// DatePicker
// ---------------------------------------------------------------------------

export type DatePickerMode = 'single' | 'range';

export interface DatePickerSingleProps {
  mode?: 'single';
  value?: Date | null;
  rangeValue?: never;
  onChange?: (value: Date | null) => void;
}

export interface DatePickerRangeProps {
  mode: 'range';
  value?: never;
  rangeValue?: [Date | null, Date | null];
  onChange?: (value: [Date, Date] | [null, null]) => void;
}

export type DatePickerProps = (DatePickerSingleProps | DatePickerRangeProps) & {
  theme?: ThemeColor;
  minDate?: Date;
  maxDate?: Date;
  showModeToggle?: boolean;
  showFooter?: boolean;
  showSelectedDisplay?: boolean;
};

export declare const DatePicker: React.FC<DatePickerProps>;

// ---------------------------------------------------------------------------
// Form
// ---------------------------------------------------------------------------

export interface FormFieldDef {
  /** Unique key used to identify the field in the submitted values map */
  id: string;
  label: string;
  /** Any meticulous-ui (or custom) input component */
  component: React.ComponentType<any>;
  isMandatory?: boolean;
  /** Extra props merged on top of the shared `allProps` for this field only */
  allProps?: Record<string, unknown>;
  /** Props passed directly to the component. `defaultValue` seeds the initial value; `onChange` is called alongside the form's internal tracking. */
  compProps?: {
    defaultValue?: string;
    onChange?: (value: string) => void;
    [key: string]: unknown;
  };
  /** Return an error string when invalid, or `null` when valid */
  validate?: (value: string) => string | null;
}

export interface FormHandle {
  /** Returns the current value of every field keyed by field `id` */
  getValues: () => Record<string, string>;
}

export interface FormProps extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  fields?: FormFieldDef[];
  /** Props spread onto every field component (can be overridden per field via `allProps`) */
  allProps?: Record<string, unknown>;
  /** Called with the collected values when the form passes validation */
  onSubmit?: (values: Record<string, string>) => void;
  submitLabel?: string;
  /** Keep the submit button disabled until all fields with a `validate` function are valid */
  disableUntilValid?: boolean;
  gap?: string;
  labelMarginBottom?: string;
}

export declare const Form: React.ForwardRefExoticComponent<
  FormProps & React.RefAttributes<FormHandle>
>;

// ---------------------------------------------------------------------------
// Selectbox
// ---------------------------------------------------------------------------

export interface SelectboxProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  options: DropdownOption[];
  onChange: (value: Array<string | number>) => void;
  value?: Array<string | number>;
  width?: string;
  menuHeight?: string;
  placeholder?: string;
  theme?: ThemeColor;
  isDisabled?: boolean;
  isLoading?: boolean;
  searchable?: boolean;
  searchPh?: string;
  onLoadMore?: () => void;
  hasMore?: boolean;
  isLoadingMore?: boolean;
  loaderColor?: string;
}

export declare const Selectbox: React.FC<SelectboxProps>;

// ---------------------------------------------------------------------------
// Shimmer
// ---------------------------------------------------------------------------

export interface ShimmerProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  label?: string;
}

export declare const Shimmer: React.FC<ShimmerProps>;

// ---------------------------------------------------------------------------
// Spinner
// ---------------------------------------------------------------------------

export interface SpinnerProps extends React.SVGAttributes<SVGElement> {
  color?: ThemeColor | string;
  size?: 'small' | 'medium' | 'large';
}

export declare const Spinner: React.FC<SpinnerProps>;

// ---------------------------------------------------------------------------
// Loader
// ---------------------------------------------------------------------------

export type LoaderTheme =
  | 'blue'
  | 'green'
  | 'red'
  | 'yellow'
  | 'orange'
  | 'black'
  | 'grey'
  | 'violet'
  | 'teal'
  | 'purple'
  | 'pink';

export interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: ComponentSize;
  theme?: LoaderTheme;
  isBounce?: boolean;
  isMini?: boolean;
  isMiniDark?: boolean;
}

export declare const Loader: React.FC<LoaderProps>;

// ---------------------------------------------------------------------------
// PageLoader
// ---------------------------------------------------------------------------

export interface PageLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  theme?: ThemeColor;
  color?: string;
}

export declare const PageLoader: React.FC<PageLoaderProps>;

// ---------------------------------------------------------------------------
// OtpInput
// ---------------------------------------------------------------------------

export interface OtpInputProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  length?: number;
  value?: string;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
}

export declare const OtpInput: React.FC<OtpInputProps>;

// ---------------------------------------------------------------------------
// Image
// ---------------------------------------------------------------------------

export interface ImageProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt?: string;
  width?: string | number;
  /** Pass `"auto"` for responsive images. Pair with `aspectRatio` so the shimmer reserves space before image bytes arrive. */
  height?: string | number;
  /** CSS aspect-ratio hint (e.g. `"16/9"`, `"4/3"`, `"1/1"`). Required for correct shimmer behaviour when `height` is `"auto"`. */
  aspectRatio?: string;
  /** Fallback min-height when `height` is `"auto"` and no `aspectRatio` is given. Defaults to `"12rem"`. */
  minHeight?: string | number;
  borderRadius?: string | number;
  loadLow?: boolean;
  lowSrc?: string;
}

export declare const Image: React.FC<ImageProps>;

// ---------------------------------------------------------------------------
// VideoPlayer
// ---------------------------------------------------------------------------

export interface VideoPlayerProps extends React.HTMLAttributes<HTMLDivElement> {
  link: string;
  thumbnail?: string;
  width?: string | number;
  height?: string | number;
  borderRadius?: number;
  hasShimmer?: boolean;
}

export declare const VideoPlayer: React.FC<VideoPlayerProps>;

// ---------------------------------------------------------------------------
// Timer
// ---------------------------------------------------------------------------

export interface TimerProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: ThemeColor;
  showTime?: boolean;
  showTimeWithSec?: boolean;
  timeZone?: string;
  isDigital?: boolean;
  timerSeconds?: number;
  onTimerAdd?: () => void;
  onTimerComplete?: () => void;
  onTimerRemove?: () => void;
  onTimerPause?: () => void;
  onTimerPlay?: () => void;
  size?: number;
}

export declare const Timer: React.FC<TimerProps>;

// ---------------------------------------------------------------------------
// Carousel
// ---------------------------------------------------------------------------

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  data: unknown[];
  renderCarousel: (item: unknown, index: number) => React.ReactNode;
  visibleSlides?: number;
  hasArrow?: boolean;
  overlayArrows?: boolean;
  arrowTop?: string | number;
  areDotsHidden?: boolean;
  autoSlide?: boolean;
  autoSlideSec?: number;
  loop?: boolean;
  dragToSlide?: boolean;
  liveDrag?: boolean;
  liveDragMobile?: boolean;
  showProgress?: boolean;
  defaultIndex?: number;
  onSlideChange?: (index: number) => void;
}

export declare const Carousel: React.FC<CarouselProps>;

// ---------------------------------------------------------------------------
// RootComponent
// ---------------------------------------------------------------------------

export interface RootComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export declare const RootComponent: React.FC<RootComponentProps>;

// ---------------------------------------------------------------------------
// Switch
// ---------------------------------------------------------------------------

export interface SwitchProps {
  /** Controlled checked state */
  checked?: boolean;
  /** Initial state for uncontrolled usage */
  defaultChecked?: boolean;
  /** Called with the new boolean value on every toggle */
  onChange?: (value: boolean) => void;
  /** Icon rendered inside the thumb when ON */
  onIcon?: React.ReactNode;
  /** Icon rendered inside the thumb when OFF */
  offIcon?: React.ReactNode;
  /** Track background colour when ON (any CSS colour string) */
  onColor?: string;
  /** Track background colour when OFF (any CSS colour string) */
  offColor?: string;
  /** Label text displayed inside the track when ON */
  onLabel?: string;
  /** Label text displayed inside the track when OFF */
  offLabel?: string;
  /** Accessible name for screen readers when no visible label is present */
  label?: string;
  /** id forwarded to the underlying button element */
  id?: string;
  disabled?: boolean;
}

export declare const Switch: React.FC<SwitchProps>;

// ---------------------------------------------------------------------------
// Grid
// ---------------------------------------------------------------------------

type GridAlignItems = 'start' | 'end' | 'center' | 'stretch' | 'baseline';
type GridJustifyItems = 'start' | 'end' | 'center' | 'stretch';
type GridAlignContent =
  | 'start'
  | 'end'
  | 'center'
  | 'stretch'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
type GridJustifyContent =
  | 'start'
  | 'end'
  | 'center'
  | 'stretch'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
type GridAutoFlow = 'row' | 'column' | 'dense' | 'row dense' | 'column dense';

export interface GridProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  /** Number of equal columns or a CSS grid-template-columns value */
  columns?: number | string;
  /** Number of equal rows or a CSS grid-template-rows value */
  rows?: number | string;
  /** Template areas — each string is one row, e.g. ['header header', 'sidebar main'] */
  areas?: string[];
  /** Gap between all cells */
  gap?: string;
  /** Column-only gap */
  columnGap?: string;
  /** Row-only gap */
  rowGap?: string;
  /** Enables responsive auto-fit columns: repeat(auto-fit, minmax(value, 1fr)) */
  minChildWidth?: string;
  autoFlow?: GridAutoFlow;
  autoColumns?: string;
  autoRows?: string;
  alignItems?: GridAlignItems;
  justifyItems?: GridJustifyItems;
  alignContent?: GridAlignContent;
  justifyContent?: GridJustifyContent;
  /** Render as inline-grid instead of grid */
  inline?: boolean;
  children?: React.ReactNode;
  'aria-label'?: string;
  'aria-labelledby'?: string;
}

export interface GridItemProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  /** grid-column shorthand, e.g. '1 / 3' */
  column?: string;
  columnStart?: number | string;
  columnEnd?: number | string;
  /** Shortcut for span N columns */
  columnSpan?: number;
  /** grid-row shorthand, e.g. '1 / 3' */
  row?: string;
  rowStart?: number | string;
  rowEnd?: number | string;
  /** Shortcut for span N rows */
  rowSpan?: number;
  /** Named grid-area defined on the parent Grid */
  area?: string;
  alignSelf?: 'auto' | GridAlignItems;
  justifySelf?: 'auto' | GridJustifyItems;
  /** place-self shorthand */
  placeSelf?: string;
  children?: React.ReactNode;
}

export declare const Grid: React.FC<GridProps>;
export declare const GridItem: React.FC<GridItemProps>;

// ---------------------------------------------------------------------------
// Sidebar
// ---------------------------------------------------------------------------

export interface SidebarChildItem {
  id: string;
  label: string;
  badge?: number;
}

export interface SidebarNavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  badge?: number;
  onAdd?: () => void;
  children?: SidebarChildItem[];
}

export interface SidebarBottomItem {
  id: string;
  label?: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

export interface SidebarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  logo?: React.ReactNode;
  storeName?: string;
  storeUrl?: string;
  onSwitchStore?: () => void;
  navItems?: SidebarNavItem[];
  activeId?: string;
  onNavChange?: (id: string) => void;
  bottomItems?: SidebarBottomItem[];
  collapsed?: boolean;
  onCollapseToggle?: () => void;
  /** Stays collapsed; expands on hover and collapses again after any nav action */
  hoverExpand?: boolean;
  /** When true shows logo + store name + store URL + small hamburger. When false (default) shows a large hamburger beside the logo only. */
  showStoreInfo?: boolean;
  theme?: 'light' | 'dark';
}

export declare const Sidebar: React.FC<SidebarProps>;

// ---------------------------------------------------------------------------
// Typography
// ---------------------------------------------------------------------------

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  /** Text color — any CSS color value or a color token string. */
  color?: string;
  children?: React.ReactNode;
}

export interface PProps extends TypographyProps {
  /** Font size — any CSS value, e.g. `'1.6rem'`. Defaults to `'1.92rem'`. */
  size?: string;
}

/** Paragraph component — renders a `<p>` tag with optional color and size. */
export declare const P: React.FC<PProps>;

/** H1 heading — 5.76rem. */
export declare const H1: React.FC<TypographyProps>;
/** H2 heading — 4.8rem. */
export declare const H2: React.FC<TypographyProps>;
/** H3 heading — 3.84rem. */
export declare const H3: React.FC<TypographyProps>;
/** H4 heading — 2.88rem. */
export declare const H4: React.FC<TypographyProps>;
/** H5 heading — 2.24rem. */
export declare const H5: React.FC<TypographyProps>;
/** H6 heading — 1.92rem. */
export declare const H6: React.FC<TypographyProps>;

/** All heading components bundled as a single namespace object. */
export declare const Headings: {
  H1: React.FC<TypographyProps>;
  H2: React.FC<TypographyProps>;
  H3: React.FC<TypographyProps>;
  H4: React.FC<TypographyProps>;
  H5: React.FC<TypographyProps>;
  H6: React.FC<TypographyProps>;
};

// ---------------------------------------------------------------------------
// React Utilities
// ---------------------------------------------------------------------------

/**
 * Create a typed React context + a hook that throws when used outside its Provider.
 * Returns `[Provider, useCtx]`.
 */
export declare function createContextHook<T>(defaultValue?: T): [React.Provider<T>, () => T];

/**
 * Wrap multiple context Providers into a single composed Provider component.
 * Providers are applied right-to-left (outermost last).
 */
export declare function composeProviders(
  ...providers: React.ComponentType<{ children: React.ReactNode }>[]
): React.FC<{ children: React.ReactNode }>;

/**
 * Lazily import a named export from a dynamic import.
 * Returns `{ [name]: React.LazyExoticComponent }`.
 */
export declare function lazyImport<
  T extends Record<K, React.ComponentType<any>>,
  K extends keyof T,
>(factory: () => Promise<T>, name: K): Record<K, React.LazyExoticComponent<T[K]>>;

/**
 * Higher-order component — wraps `Component` in an error boundary that
 * renders `FallbackComponent` when an error is caught.
 */
export declare function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  FallbackComponent: React.ComponentType<{ error: Error | null }>
): React.FC<P>;

/**
 * Higher-order component — wraps `Component` in a `<Suspense>` boundary
 * with the given `fallback`.
 */
export declare function withSuspense<P extends object>(
  Component: React.ComponentType<P>,
  fallback?: React.ReactNode
): React.FC<P>;

/**
 * Wrap `React.memo` with a custom comparison function.
 * Equivalent to `React.memo(Component, compare)`.
 */
export declare function memoCompare<P extends object>(
  Component: React.ComponentType<P>,
  compare: (prevProps: Readonly<P>, nextProps: Readonly<P>) => boolean
): React.MemoExoticComponent<React.ComponentType<P>>;

/**
 * Create and append a DOM node to `document.body`.
 * Useful as a portal mount target.
 */
export declare function createPortalNode(tagName?: keyof HTMLElementTagNameMap): HTMLElement;

// ---------------------------------------------------------------------------
// Utilities
// ---------------------------------------------------------------------------

/** Add `n` days to a date. */
export declare function addDays(date: Date | string, n: number): Date;

/** Announce a message to screen readers via an ARIA live region. */
export declare function announceToScreenReader(
  msg: string,
  politeness?: 'polite' | 'assertive'
): void;

/** Create a structured audit-log entry. */
export declare function auditLog(
  action: string,
  metadata?: Record<string, any>
): Record<string, any>;

/** Build a URL string with serialised query parameters. */
export declare function buildURL(path: string, params?: Record<string, any>): string;

/** Convert a string to camelCase. */
export declare function camelCase(str: string): string;

/** Wrap a promise so it can be cancelled before it settles. */
export declare function cancelablePromise<T>(promise: Promise<T>): {
  promise: Promise<T>;
  cancel: () => void;
};

/** Capitalise the first character of a string. */
export declare function capFirstLetter(str: string): string;

/** Capitalise the first character and lowercase the rest. */
export declare function capitalize(str: string): string;

/** Capture and record an exception with optional context. */
export declare function captureException(
  error: any,
  context?: Record<string, any>
): Record<string, any>;

/** Split an array into chunks of `size`. */
export declare function chunk<T>(array: T[], size: number): T[][];

/** Clamp `value` to the inclusive range [min, max]. */
export declare function clamp(value: number, min: number, max: number): number;

/** Clear both localStorage and sessionStorage. */
export declare function clearStorage(): void;

/** Compose functions right-to-left into a single function. */
export declare function compose<T>(...fns: ((arg: T) => T)[]): (val: T) => T;

/** Copy text to the system clipboard. */
export declare function copyToClipboard(text: string): Promise<void>;

/** Return days / hours / minutes / seconds until a target date. */
export declare function countdown(targetDate: Date | string): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

/** Create a lightweight pub/sub event bus. */
export declare function createPubSub(): {
  subscribe: (event: string, handler: (...args: any[]) => void) => () => void;
  publish: (event: string, ...args: any[]) => void;
};

/** Debounce a function by `delay` milliseconds. */
export declare function debounce<T extends (...args: any[]) => any>(fn: T, delay: number): T;

/** Decode a JWT token and return its payload, or null on failure. */
export declare function decodeJWT(token: string): Record<string, any> | null;

/** Return a deep clone of an object or array. */
export declare function deepClone<T>(obj: T): T;

/** Recursively freeze an object so it is immutable. */
export declare function deepFreeze<T extends Record<string, any>>(obj: T): T;

/** Call `callback` whenever a click occurs outside `ref`. Returns a cleanup function. */
export declare function detectOutsideClick(
  ref: HTMLElement | React.RefObject<HTMLElement>,
  callback: (e: MouseEvent) => void
): () => void;

/** Return the number of days between two dates. */
export declare function differenceInDays(a: Date | string, b: Date | string): number;

/** Trigger a file download from a URL. */
export declare function downloadFile(url: string, filename?: string): void;

/** Fade an element in over `duration` ms. */
export declare function fadeIn(element: HTMLElement, duration?: number): void;

/** Fade an element out over `duration` ms. */
export declare function fadeOut(element: HTMLElement, duration?: number): void;

/** Return `value` if truthy, otherwise `defaultValue`. */
export declare function fallback<T>(value: T, defaultValue: T): T;

/** Read a feature-flag value from storage. */
export declare function featureGate(flag: string): boolean;

/** Read a File as a base64-encoded data URL. */
export declare function fileToBase64(file: File): Promise<string>;

/** Filter an array to items where `item[key] === value`. */
export declare function filterByKey<T extends Record<string, any>>(
  data: T[],
  key: string,
  value: any
): T[];

/** Flatten a nested object to dot-notation keys. */
export declare function flattenObject(
  obj: Record<string, any>,
  prefix?: string
): Record<string, any>;

/** Move browser focus to an element. */
export declare function focusElement(ref: HTMLElement | React.RefObject<HTMLElement>): void;

/** Format a number in compact notation (e.g. 1.2K, 3.4M). */
export declare function formatCompactNumber(num: number, locale?: string): string;

/** Format a number as a localised currency string. */
export declare function formatCurrency(num: number, currency?: string, locale?: string): string;

/** Format a date as a human-readable localised string. */
export declare function formatDate(date: Date | string, locale?: string): string;

/** Format a number with locale-aware grouping separators. */
export declare function formatNumber(num: number, locale?: string): string;

/** Format a date as a localised time string (e.g. 3:45 PM). */
export declare function formatTime(date: Date | string, locale?: string): string;

/** Filter an array to items whose string fields approximately match `query`. */
export declare function fuzzySearch<T>(data: T[], query: string): T[];

/** Generate a unique, deterministic aria- ID string. */
export declare function generateAriaId(prefix?: string): string;

/** Generate initials from a full name (e.g. "John Doe" → "JD"). */
export declare function generateInitials(name: string): string;

/** Return the current URL pathname. */
export declare function getCurrentPath(): string;

/** Return a greeting string appropriate for the current time of day. */
export declare function getGreetingByTime(): string;

/** Get parsed value from localStorage, or null if absent. */
export declare function getLocalStorage<T = any>(key: string): T | null;

/** Return all URL query parameters as a plain object. */
export declare function getQueryParams(): Record<string, string>;

/** Return viewport and device screen dimensions. */
export declare function getScreenSize(): {
  width: number;
  height: number;
  deviceWidth: number;
  deviceHeight: number;
  pixelRatio: number;
};

/** Get parsed value from sessionStorage, or null if absent. */
export declare function getSessionStorage<T = any>(key: string): T | null;

/** Read an auth token from localStorage. */
export declare function getToken(key?: string): string | null;

/** Read an A/B test variant from storage. */
export declare function getVariant(testName: string, key?: string): string | null;

/** Group array items by a key or key-selector function. */
export declare function groupBy<T extends Record<string, any>>(
  array: T[],
  key: string | ((item: T) => any)
): Record<string, T[]>;

/** Return a keydown handler that navigates a list with arrow keys. */
export declare function handleKeyboardNavigation<T>(
  items: T[],
  currentIndex: number,
  options?: {
    onSelect?: (index: number, item: T) => void;
    loop?: boolean;
    orientation?: 'vertical' | 'horizontal';
  }
): (e: KeyboardEvent) => void;

/** Return true if old and new props are deeply equal (functions ignored). */
export declare function hasEqualProps(
  oldProps: Record<string, any>,
  newProps: Record<string, any>
): boolean;

/** Return true if the stored role matches `role`. */
export declare function hasPermission(role: string, key?: string): boolean;

/** Identity — returns its argument unchanged. */
export declare function identity<T>(x: T): T;

/** Return true if `value` is a valid 12-digit Aadhaar number. */
export declare function isAadhaar(value: string): boolean;

/** Return true if `path` matches the current URL pathname. */
export declare function isActiveRoute(path: string): boolean;

/** Return true if the user agent is Android. */
export declare function isAndroid(): boolean;

/** Return true if an auth token exists in storage. */
export declare function isAuthenticated(key?: string): boolean;

/** Return true if the OS or browser is in dark mode. */
export declare function isDarkMode(): boolean;

/** Return true if `value` is a valid e-mail address. */
export declare function isEmail(value: string): boolean;

/** Return true if `value` is empty (null, undefined, "", [], {}). */
export declare function isEmpty(value: any): boolean;

/** Return true if `a` and `b` are deeply equal. */
export declare function isEqual(a: any, b: any): boolean;

/** Return true if a feature flag is stored as enabled. */
export declare function isFeatureEnabled(flag: string, key?: string): boolean;

/** Return true if `value` is a valid 15-character GST number. */
export declare function isGST(value: string): boolean;

/** Return true if the user agent is iOS. */
export declare function isIOS(): boolean;

/** Return true if the user agent is a mobile device. */
export declare function isMobile(): boolean;

/** Type-guard: return true (and narrow type) if `arr` is a non-empty array. */
export declare function isNonEmptyArray<T>(arr: any): arr is [T, ...T[]];

/** Return true if the browser reports being online. */
export declare function isOnline(): boolean;

/** Return true if `value` is a valid 10-character PAN number. */
export declare function isPAN(value: string): boolean;

/** Return true if `value` meets password-strength requirements. */
export declare function isPasswordStrong(value: string): boolean;

/** Return true if `date` is before now. */
export declare function isPast(date: Date | string): boolean;

/** Return true if `value` is a valid phone number. */
export declare function isPhone(value: string): boolean;

/** Return true if `value` is not null, undefined, or empty string. */
export declare function isRequired(value: any): boolean;

/** Return true if the user agent is Safari. */
export declare function isSafari(): boolean;

/** Return true if `date` falls on today's date. */
export declare function isToday(date: Date | string): boolean;

/** Return true if `value` is a valid URL. */
export declare function isURL(value: string): boolean;

/** Convert a string to kebab-case. */
export declare function kebabCase(str: string): string;

/** Index an array into an object keyed by a property or selector. */
export declare function keyBy<T extends Record<string, any>>(
  array: T[],
  key: string | ((item: T) => any)
): Record<string, T>;

/** Return a lazily-loaded React component via dynamic import. */
export declare function lazyLoadComponent(
  importFn: () => Promise<{ default: React.ComponentType<any> }>
): React.LazyExoticComponent<React.ComponentType<any>>;

/** Prevent the document body from scrolling. */
export declare function lockBodyScroll(): void;

/** Log an error with optional context. */
export declare function logError(error: any, context?: Record<string, any>): void;

/** Log an info message with optional context. */
export declare function logInfo(
  message: string,
  context?: Record<string, any>
): Record<string, any>;

/** Log a warning message with optional context. */
export declare function logWarn(
  message: string,
  context?: Record<string, any>
): Record<string, any>;

/** Mask an email address (e.g. j***@example.com). */
export declare function maskEmail(str: string): string;

/** Mask all but the last 4 digits of a phone number. */
export declare function maskPhone(str: string): string;

/** Return true if `value` is no longer than `n` characters. */
export declare function maxLength(value: string, n: number): boolean;

/** Return the bounding DOMRect of an element, or null. */
export declare function measureElement(
  ref: HTMLElement | React.RefObject<HTMLElement | null>
): DOMRect | null;

/** Return a PerformanceEntry for the given metric name. */
export declare function measurePerformance(metric: string): Record<string, any>;

/** Wrap a function so repeated calls with the same args return a cached result. */
export declare function memoize<T extends (...args: any[]) => any>(fn: T): T;

/** Recursively merge `source` into `target`. */
export declare function mergeDeep<T extends Record<string, any>>(target: T, source: Partial<T>): T;

/** Return true if `value` is at least `n` characters long. */
export declare function minLength(value: string, n: number): boolean;

/** Sort an array by multiple sort keys in sequence. */
export declare function multiSort<T extends Record<string, any>>(
  data: T[],
  config: { key: string | ((item: T) => any); order?: 'asc' | 'desc' }[]
): T[];

/** No-op function. */
export declare function noop(): void;

/** Return a shallow copy of `obj` without the specified keys. */
export declare function omit<T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K>;

/** Return a wrapper that calls `fn` at most once and returns the same value thereafter. */
export declare function once<T extends (...args: any[]) => any>(fn: T): T;

/** Open a URL in a new browser tab. */
export declare function openInNewTab(url: string): void;

/** Slice `data` into a page of `limit` items and return pagination metadata. */
export declare function paginate<T>(
  data: T[],
  page: number,
  limit: number
): { data: T[]; total: number; page: number; limit: number; totalPages: number };

/** Run all promises concurrently and return their results. */
export declare function parallel<T>(promises: Promise<T>[]): Promise<T[]>;

/** Calculate what percentage `part` is of `total`. */
export declare function percentage(part: number, total: number, decimals?: number): number;

/** Return true if `role` is included in `currentRoles`. */
export declare function permissionGuard(role: string, currentRoles?: string[]): boolean;

/** Return a shallow copy of `obj` containing only the specified keys. */
export declare function pick<T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K>;

/** Pipe functions left-to-right into a single function. */
export declare function pipe<T>(...fns: ((arg: T) => T)[]): (val: T) => T;

/** Throttle a function to at most one call per animation frame. */
export declare function rafThrottle<T extends (...args: any[]) => any>(fn: T): T;

/** Return a random float in [min, max]. */
export declare function randomBetween(min: number, max: number): number;

/** Return a random integer in [min, max]. */
export declare function randomInt(min: number, max: number): number;

/** Return a random number in [min, max]. */
export declare function randomValue(min: number, max: number): number;

/** Navigate the browser to `path`. */
export declare function redirectTo(path: string): void;

/** Collapse consecutive whitespace in a string to single spaces. */
export declare function removeExtraSpaces(str: string): string;

/** Remove an item from localStorage. */
export declare function removeLocalStorage(key: string): void;

/** Remove a query parameter from the current URL. */
export declare function removeQueryParam(key: string): void;

/** Remove the auth token from localStorage. */
export declare function removeToken(key?: string): void;

/** Schedule a callback to run during a browser idle period. */
export declare function requestIdleTask(fn: () => void): void;

/** Retry an async function up to `attempts` times on failure. */
export declare function retry<T>(fn: () => Promise<T>, attempts?: number): Promise<T>;

/** Round `num` to `decimals` decimal places. */
export declare function roundTo(num: number, decimals?: number): number;

/** Wrap an async function to return a [error, result] tuple instead of throwing. */
export declare function safeAsync<T extends (...args: any[]) => Promise<any>>(
  fn: T
): (...args: Parameters<T>) => Promise<[Error, null] | [null, Awaited<ReturnType<T>>]>;

/** Parse a JSON string safely, returning `fallback` on failure. */
export declare function safeJSONParse<T = any>(str: string, fallback?: T): T;

/** Stringify a value to JSON safely, returning `fallback` on failure. */
export declare function safeJSONStringify(obj: any, fallback?: string, space?: number): string;

/** Scroll the element with id `id` into view. */
export declare function scrollToElement(id: string, behavior?: ScrollBehavior): void;

/** Scroll the page to the top. */
export declare function scrollToTop(behavior?: ScrollBehavior): void;

/** Run an array of async tasks one after another and collect results. */
export declare function sequential<T>(tasks: (() => Promise<T>)[]): Promise<T[]>;

/** Serialise `value` and store it in localStorage under `key`. */
export declare function setLocalStorage(key: string, value: any): void;

/** Set or update a query parameter in the current URL. */
export declare function setQueryParam(key: string, value: string): void;

/** Serialise `value` and store it in sessionStorage under `key`. */
export declare function setSessionStorage(key: string, value: any): void;

/** Persist an auth token to localStorage. */
export declare function setToken(token: string, key?: string): void;

/** Create a singleton — calling the returned function always returns the same instance. */
export declare function singleton<T>(factory: () => T): () => T;

/** Return a promise that resolves after `ms` milliseconds. */
export declare function sleep(ms: number): Promise<void>;

/** Convert a string to a URL-safe slug. */
export declare function slugify(str: string): string;

/** Smoothly scroll to a pixel offset, selector, or element. */
export declare function smoothScroll(target: number | string | Element, duration?: number): void;

/** Convert a string to snake_case. */
export declare function snakeCase(str: string): string;

/** Sort an array by a key or selector function (ascending). */
export declare function sortBy<T extends Record<string, any>>(
  array: T[],
  key: string | ((item: T) => any)
): T[];

/** Throttle a function to fire at most once per `delay` ms. */
export declare function throttle<T extends (...args: any[]) => any>(fn: T, delay: number): T;

/** Return a relative time string (e.g. "3 hours ago"). */
export declare function timeAgo(date: Date | string): string;

/** Convert a string to Title Case. */
export declare function titleCase(str: string): string;

/** Toggle the browser fullscreen state for an element. */
export declare function toggleFullscreen(element?: HTMLElement): void;

/** Record an analytics event with an optional payload. */
export declare function trackEvent(
  name: string,
  payload?: Record<string, any>
): Record<string, any>;

/** Record a page-view analytics event. */
export declare function trackPageView(path: string): Record<string, any>;

/** Trap keyboard focus within `element`. Returns a cleanup function. */
export declare function trapFocus(element: HTMLElement | React.RefObject<HTMLElement>): () => void;

/** Truncate `str` to `limit` characters, appending "…" if cut. */
export declare function truncate(str: string, limit: number): string;

/** Return a new array with duplicates removed by a key or selector. */
export declare function uniqueBy<T extends Record<string, any>>(
  array: T[],
  key: string | ((item: T) => any)
): T[];

/** Re-enable body scrolling after lockBodyScroll(). */
export declare function unlockBodyScroll(): void;

/** Resolve when the CSS transition for `property` ends on `element`. */
export declare function waitForTransitionEnd(
  element: HTMLElement,
  property?: string
): Promise<TransitionEvent>;

/** Race `promise` against a timeout; rejects if `ms` elapses first. */
export declare function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T>;

// ---------------------------------------------------------------------------
// Utility — QR code encoder
// ---------------------------------------------------------------------------

/** Options accepted by {@link getJsonContentAsQr}. */
export interface JsonQrOptions {
  /** Output image width in pixels. Default: `256`. */
  width?: number;
  /**
   * Reed-Solomon error correction level.
   * - `'L'` ≈ 7 %   restored  (smallest code)
   * - `'M'` ≈ 15 %  restored  (default)
   * - `'Q'` ≈ 25 %  restored
   * - `'H'` ≈ 30 %  restored  (densest code)
   */
  errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H';
  /** Quiet-zone width in QR modules. Default: `2`. */
  margin?: number;
  /** Dark module colour as 6- or 8-char hex. Default: `'#000000ff'`. */
  darkColor?: string;
  /** Light module colour as 6- or 8-char hex. Default: `'#ffffffff'`. */
  lightColor?: string;
}

/** Successful result from {@link getJsonContentAsQr}. */
export interface JsonQrSuccess {
  success: true;
  /** PNG data URL (`data:image/png;base64,…`) ready for `<img src>` or download. */
  dataUrl: string;
  /** The exact string encoded — `JSON.stringify(json)`. */
  text: string;
  /** UTF-8 byte length of the encoded string. */
  byteSize: number;
}

/** Failure result from {@link getJsonContentAsQr}. */
export interface JsonQrFailure {
  success: false;
  error: string;
}

/** Result returned by {@link getJsonContentAsQr}. */
export type JsonQrResult = JsonQrSuccess | JsonQrFailure;

/**
 * Encodes a JSON-serialisable value into a QR code and returns a PNG data URL.
 *
 * Powered by the `qrcode` package loaded on demand from esm.sh.
 * Requires a browser Canvas API.
 *
 * @example
 * ```ts
 * const result = await getJsonContentAsQr({ userId: 42, role: 'admin' });
 * if (result.success) imgEl.src = result.dataUrl;
 * ```
 */
export declare function getJsonContentAsQr(
  json: unknown,
  options?: JsonQrOptions
): Promise<JsonQrResult>;

// ---------------------------------------------------------------------------
// Utility — QR code decoder
// ---------------------------------------------------------------------------

/**
 * Source types accepted by {@link getQrAsJsonContent}.
 * - `string` — a data URL (`data:image/…`) or any URL fetchable by the browser
 * - `HTMLImageElement` — an already-loaded `<img>` element
 * - `HTMLCanvasElement` — a canvas whose pixels contain the QR image
 * - `ImageData` — raw RGBA pixel data
 * - `Blob` / `File` — image file (e.g. from `<input type="file">`)
 */
export type QrSource = string | HTMLImageElement | HTMLCanvasElement | ImageData | Blob | File;

/** Decoder backend that successfully read the QR code. */
export type QrDecodeSource = 'BarcodeDetector' | '@zxing/library' | 'jsQR';

/** Successful result from {@link getQrAsJsonContent}. */
export interface QrJsonSuccess {
  success: true;
  /** The parsed JavaScript object decoded from the QR. */
  json: unknown;
  /** Raw string decoded from the QR before JSON parsing. */
  text: string;
  /** Which decoder backend produced the result. */
  source: QrDecodeSource;
}

/** Failure result from {@link getQrAsJsonContent}. */
export interface QrJsonFailure {
  success: false;
  error: string;
}

/** Result returned by {@link getQrAsJsonContent}. */
export type QrJsonResult = QrJsonSuccess | QrJsonFailure;

/**
 * Decodes a QR code image back to the JSON object that was originally encoded.
 *
 * Tries three decoders in priority order:
 * 1. Native `BarcodeDetector` API (Chrome 83+, Edge 83+, Safari 17.4+)
 * 2. `@zxing/library` — pure-JS ZXing port, loaded on demand from esm.sh
 * 3. `jsQR` — pure-JS fallback, loaded on demand from esm.sh
 *
 * @example
 * ```ts
 * const [file] = event.target.files;
 * const result = await getQrAsJsonContent(file);
 * if (result.success) console.log(result.json);
 * ```
 */
export declare function getQrAsJsonContent(source: QrSource): Promise<QrJsonResult>;

// ---------------------------------------------------------------------------
// Utility — OCR
// ---------------------------------------------------------------------------

export interface RecognizeImageResult {
  success: boolean;
  /** BCP-47 code of the primary language used for recognition. */
  detectedLanguage?: string;
  /** Full extracted text from OCR, newline-separated by detected region. */
  text?: string;
  /** OCR confidence score 0–100. */
  confidence?: number | null;
  /**
   * All readable lines from the OCR output as a key-value object.
   * Lines matching `ALL-CAPS KEY : value` use the label as the key.
   * Lines without a recognisable label are assigned generic keys (`param_1`, `param_2`, …).
   * Continuation lines (e.g. a wrapped address) are appended to the previous key.
   */
  fields?: Record<string, string>;
  /** Raw Tesseract output including per-word bounding boxes and metadata. */
  rawJson?: object;
  /** Human-readable error when success is false. */
  error?: string;
}

/**
 * Runs OCR on a base64 image in all browsers with no npm dependency.
 * Powered by Tesseract.js loaded on demand from a CDN (fetched once, then
 * browser-cached). Preprocesses the image (grayscale + 2× upscale + contrast
 * boost) before recognition for higher accuracy. Returns structured `fields`
 * with extracted key-value pairs alongside the raw `text`, `confidence` score,
 * and `rawJson` with full word-level bounding-box metadata.
 */
export declare function recognizeImageContent(
  base64Image: string,
  lang?: string
): Promise<RecognizeImageResult>;

// ---------------------------------------------------------------------------
// Hooks
// ---------------------------------------------------------------------------

export declare function usePrevious<T>(value: T): T | undefined;
export declare function useDebounce<T>(value: T, delay: number): T;
export declare function useThrottle<T>(value: T, delay: number): T;
export declare function useToggle(initial?: boolean): [boolean, (next?: boolean) => void];
export declare function useIsMounted(): React.MutableRefObject<boolean>;
export declare function useUnmount(callback: () => void): void;
export declare function useFirstRender(): boolean;
export declare function useTimeout(callback: () => void, delay: number | null): void;
export declare function useInterval(callback: () => void, delay: number | null): void;
export declare function useEventListener(
  event: string,
  handler: (e: Event) => void,
  target?: EventTarget
): void;
export declare function useIntersectionObserver(
  ref: React.RefObject<Element>,
  options?: IntersectionObserverInit
): IntersectionObserverEntry | null;
export declare function useMediaQuery(query: string): boolean;
export declare function useOutsideClick(
  ref: React.RefObject<Element>,
  callback: (e: MouseEvent | TouchEvent) => void
): void;
export declare function useWindowSize(): { width: number; height: number };
export declare function useOnlineStatus(): boolean;
export declare function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void];
export declare function useSessionStorage<T>(key: string, initialValue: T): [T, (value: T) => void];
export declare function useCopyToClipboard(): {
  copied: boolean;
  copy: (text: string) => Promise<void>;
};

// ---------------------------------------------------------------------------
// Color palettes  (meticulous-ui/colors  or  meticulous-ui/colors/<name>)
// ---------------------------------------------------------------------------

declare module 'meticulous-ui/colors' {
  export const amber: ColorShades;
  export const black: ColorShades;
  export const blue: ColorShades;
  export const blueGray: ColorShades;
  export const brown: ColorShades;
  export const cider: ColorShades;
  export const cyan: ColorShades;
  export const deepOrange: ColorShades;
  export const deepPurple: ColorShades;
  export const green: ColorShades;
  export const grey: ColorShades;
  export const indigo: ColorShades;
  export const lightBlue: ColorShades;
  export const lightGreen: ColorShades;
  export const lime: ColorShades;
  export const orange: ColorShades;
  export const pink: ColorShades;
  export const purple: ColorShades;
  export const red: ColorShades;
  export const teal: ColorShades;
  export const violet: ColorShades;
  export const white: ColorShades;
  export const yellow: ColorShades;
}

declare module 'meticulous-ui/colors/amber' {
  const c: ColorShades;
  export default c;
}
declare module 'meticulous-ui/colors/black' {
  const c: ColorShades;
  export default c;
}
declare module 'meticulous-ui/colors/blue' {
  const c: ColorShades;
  export default c;
}
declare module 'meticulous-ui/colors/blueGray' {
  const c: ColorShades;
  export default c;
}
declare module 'meticulous-ui/colors/brown' {
  const c: ColorShades;
  export default c;
}
declare module 'meticulous-ui/colors/cider' {
  const c: ColorShades;
  export default c;
}
declare module 'meticulous-ui/colors/cyan' {
  const c: ColorShades;
  export default c;
}
declare module 'meticulous-ui/colors/deepOrange' {
  const c: ColorShades;
  export default c;
}
declare module 'meticulous-ui/colors/deepPurple' {
  const c: ColorShades;
  export default c;
}
declare module 'meticulous-ui/colors/green' {
  const c: ColorShades;
  export default c;
}
declare module 'meticulous-ui/colors/grey' {
  const c: ColorShades;
  export default c;
}
declare module 'meticulous-ui/colors/indigo' {
  const c: ColorShades;
  export default c;
}
declare module 'meticulous-ui/colors/lightBlue' {
  const c: ColorShades;
  export default c;
}
declare module 'meticulous-ui/colors/lightGreen' {
  const c: ColorShades;
  export default c;
}
declare module 'meticulous-ui/colors/lime' {
  const c: ColorShades;
  export default c;
}
declare module 'meticulous-ui/colors/orange' {
  const c: ColorShades;
  export default c;
}
declare module 'meticulous-ui/colors/pink' {
  const c: ColorShades;
  export default c;
}
declare module 'meticulous-ui/colors/purple' {
  const c: ColorShades;
  export default c;
}
declare module 'meticulous-ui/colors/red' {
  const c: ColorShades;
  export default c;
}
declare module 'meticulous-ui/colors/teal' {
  const c: ColorShades;
  export default c;
}
declare module 'meticulous-ui/colors/violet' {
  const c: ColorShades;
  export default c;
}
declare module 'meticulous-ui/colors/white' {
  const c: ColorShades;
  export default c;
}
declare module 'meticulous-ui/colors/yellow' {
  const c: ColorShades;
  export default c;
}
