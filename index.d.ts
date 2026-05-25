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
  height?: string | number;
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
// Utility — OCR
// ---------------------------------------------------------------------------

export interface RecognizeImageResult {
  success: boolean;
  /** Whether the TextDetector API is available in this browser. */
  supported?: boolean;
  /** BCP-47 code of the primary language used for recognition. */
  detectedLanguage?: string;
  /** Full extracted text, newline-separated by detected region. */
  text?: string;
  /** OCR confidence score 0–100, or null when not available. */
  confidence?: number | null;
  /** Raw per-region data including bounding boxes and corner points. */
  rawJson?: Array<{
    rawValue: string;
    boundingBox: { x: number; y: number; width: number; height: number };
    cornerPoints: Array<{ x: number; y: number }>;
  }>;
  /** Human-readable error when success is false. */
  error?: string;
}

/**
 * Detect text in a base64 image using the browser-native TextDetector API.
 * No external dependencies or network requests.
 * Supported in Chrome 70+ and Edge 79+; returns supported:false on other browsers.
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

// ---------------------------------------------------------------------------
// Sub-path entry points  (meticulous-ui/utils · /hooks · /reactUtils)
// ---------------------------------------------------------------------------
// These re-export the same symbols as the main package entry so consumers
// that do  import { debounce } from 'meticulous-ui/utils'  get full types.

declare module 'meticulous-ui/utils' {
  export * from 'meticulous-ui';
}
declare module 'meticulous-ui/hooks' {
  export * from 'meticulous-ui';
}
declare module 'meticulous-ui/reactUtils' {
  export * from 'meticulous-ui';
}

// ---------------------------------------------------------------------------
// Individual util sub-paths  (meticulous-ui/utils/<name>)
// ---------------------------------------------------------------------------

declare module 'meticulous-ui/utils/addDays' {
  import { addDays } from 'meticulous-ui';
  export default addDays;
}
declare module 'meticulous-ui/utils/announceToScreenReader' {
  import { announceToScreenReader } from 'meticulous-ui';
  export default announceToScreenReader;
}
declare module 'meticulous-ui/utils/auditLog' {
  import { auditLog } from 'meticulous-ui';
  export default auditLog;
}
declare module 'meticulous-ui/utils/buildURL' {
  import { buildURL } from 'meticulous-ui';
  export default buildURL;
}
declare module 'meticulous-ui/utils/camelCase' {
  import { camelCase } from 'meticulous-ui';
  export default camelCase;
}
declare module 'meticulous-ui/utils/cancelablePromise' {
  import { cancelablePromise } from 'meticulous-ui';
  export default cancelablePromise;
}
declare module 'meticulous-ui/utils/capFirstLetter' {
  import { capFirstLetter } from 'meticulous-ui';
  export default capFirstLetter;
}
declare module 'meticulous-ui/utils/capitalize' {
  import { capitalize } from 'meticulous-ui';
  export default capitalize;
}
declare module 'meticulous-ui/utils/captureException' {
  import { captureException } from 'meticulous-ui';
  export default captureException;
}
declare module 'meticulous-ui/utils/chunk' {
  import { chunk } from 'meticulous-ui';
  export default chunk;
}
declare module 'meticulous-ui/utils/clamp' {
  import { clamp } from 'meticulous-ui';
  export default clamp;
}
declare module 'meticulous-ui/utils/clearStorage' {
  import { clearStorage } from 'meticulous-ui';
  export default clearStorage;
}
declare module 'meticulous-ui/utils/compose' {
  import { compose } from 'meticulous-ui';
  export default compose;
}
declare module 'meticulous-ui/utils/copyToClipboard' {
  import { copyToClipboard } from 'meticulous-ui';
  export default copyToClipboard;
}
declare module 'meticulous-ui/utils/countdown' {
  import { countdown } from 'meticulous-ui';
  export default countdown;
}
declare module 'meticulous-ui/utils/createPubSub' {
  import { createPubSub } from 'meticulous-ui';
  export default createPubSub;
}
declare module 'meticulous-ui/utils/debounce' {
  import { debounce } from 'meticulous-ui';
  export default debounce;
}
declare module 'meticulous-ui/utils/decodeJWT' {
  import { decodeJWT } from 'meticulous-ui';
  export default decodeJWT;
}
declare module 'meticulous-ui/utils/deepClone' {
  import { deepClone } from 'meticulous-ui';
  export default deepClone;
}
declare module 'meticulous-ui/utils/deepFreeze' {
  import { deepFreeze } from 'meticulous-ui';
  export default deepFreeze;
}
declare module 'meticulous-ui/utils/detectOutsideClick' {
  import { detectOutsideClick } from 'meticulous-ui';
  export default detectOutsideClick;
}
declare module 'meticulous-ui/utils/differenceInDays' {
  import { differenceInDays } from 'meticulous-ui';
  export default differenceInDays;
}
declare module 'meticulous-ui/utils/downloadFile' {
  import { downloadFile } from 'meticulous-ui';
  export default downloadFile;
}
declare module 'meticulous-ui/utils/fadeIn' {
  import { fadeIn } from 'meticulous-ui';
  export default fadeIn;
}
declare module 'meticulous-ui/utils/fadeOut' {
  import { fadeOut } from 'meticulous-ui';
  export default fadeOut;
}
declare module 'meticulous-ui/utils/fallback' {
  import { fallback } from 'meticulous-ui';
  export default fallback;
}
declare module 'meticulous-ui/utils/featureGate' {
  import { featureGate } from 'meticulous-ui';
  export default featureGate;
}
declare module 'meticulous-ui/utils/fileToBase64' {
  import { fileToBase64 } from 'meticulous-ui';
  export default fileToBase64;
}
declare module 'meticulous-ui/utils/filterByKey' {
  import { filterByKey } from 'meticulous-ui';
  export default filterByKey;
}
declare module 'meticulous-ui/utils/flattenObject' {
  import { flattenObject } from 'meticulous-ui';
  export default flattenObject;
}
declare module 'meticulous-ui/utils/focusElement' {
  import { focusElement } from 'meticulous-ui';
  export default focusElement;
}
declare module 'meticulous-ui/utils/formatCompactNumber' {
  import { formatCompactNumber } from 'meticulous-ui';
  export default formatCompactNumber;
}
declare module 'meticulous-ui/utils/formatCurrency' {
  import { formatCurrency } from 'meticulous-ui';
  export default formatCurrency;
}
declare module 'meticulous-ui/utils/formatDate' {
  import { formatDate } from 'meticulous-ui';
  export default formatDate;
}
declare module 'meticulous-ui/utils/formatNumber' {
  import { formatNumber } from 'meticulous-ui';
  export default formatNumber;
}
declare module 'meticulous-ui/utils/formatTime' {
  import { formatTime } from 'meticulous-ui';
  export default formatTime;
}
declare module 'meticulous-ui/utils/fuzzySearch' {
  import { fuzzySearch } from 'meticulous-ui';
  export default fuzzySearch;
}
declare module 'meticulous-ui/utils/generateAriaId' {
  import { generateAriaId } from 'meticulous-ui';
  export default generateAriaId;
}
declare module 'meticulous-ui/utils/generateInitials' {
  import { generateInitials } from 'meticulous-ui';
  export default generateInitials;
}
declare module 'meticulous-ui/utils/getCurrentPath' {
  import { getCurrentPath } from 'meticulous-ui';
  export default getCurrentPath;
}
declare module 'meticulous-ui/utils/getGreetingByTime' {
  import { getGreetingByTime } from 'meticulous-ui';
  export default getGreetingByTime;
}
declare module 'meticulous-ui/utils/getImageContentAsJson' {
  import { recognizeImageContent } from 'meticulous-ui';
  export default recognizeImageContent;
}
declare module 'meticulous-ui/utils/getLocalStorage' {
  import { getLocalStorage } from 'meticulous-ui';
  export default getLocalStorage;
}
declare module 'meticulous-ui/utils/getQueryParams' {
  import { getQueryParams } from 'meticulous-ui';
  export default getQueryParams;
}
declare module 'meticulous-ui/utils/getScreenSize' {
  import { getScreenSize } from 'meticulous-ui';
  export default getScreenSize;
}
declare module 'meticulous-ui/utils/getSessionStorage' {
  import { getSessionStorage } from 'meticulous-ui';
  export default getSessionStorage;
}
declare module 'meticulous-ui/utils/getToken' {
  import { getToken } from 'meticulous-ui';
  export default getToken;
}
declare module 'meticulous-ui/utils/getVariant' {
  import { getVariant } from 'meticulous-ui';
  export default getVariant;
}
declare module 'meticulous-ui/utils/groupBy' {
  import { groupBy } from 'meticulous-ui';
  export default groupBy;
}
declare module 'meticulous-ui/utils/handleKeyboardNavigation' {
  import { handleKeyboardNavigation } from 'meticulous-ui';
  export default handleKeyboardNavigation;
}
declare module 'meticulous-ui/utils/hasEqualProps' {
  import { hasEqualProps } from 'meticulous-ui';
  export default hasEqualProps;
}
declare module 'meticulous-ui/utils/hasPermission' {
  import { hasPermission } from 'meticulous-ui';
  export default hasPermission;
}
declare module 'meticulous-ui/utils/identity' {
  import { identity } from 'meticulous-ui';
  export default identity;
}
declare module 'meticulous-ui/utils/isAadhaar' {
  import { isAadhaar } from 'meticulous-ui';
  export default isAadhaar;
}
declare module 'meticulous-ui/utils/isActiveRoute' {
  import { isActiveRoute } from 'meticulous-ui';
  export default isActiveRoute;
}
declare module 'meticulous-ui/utils/isAndroid' {
  import { isAndroid } from 'meticulous-ui';
  export default isAndroid;
}
declare module 'meticulous-ui/utils/isAuthenticated' {
  import { isAuthenticated } from 'meticulous-ui';
  export default isAuthenticated;
}
declare module 'meticulous-ui/utils/isDarkMode' {
  import { isDarkMode } from 'meticulous-ui';
  export default isDarkMode;
}
declare module 'meticulous-ui/utils/isEmail' {
  import { isEmail } from 'meticulous-ui';
  export default isEmail;
}
declare module 'meticulous-ui/utils/isEmpty' {
  import { isEmpty } from 'meticulous-ui';
  export default isEmpty;
}
declare module 'meticulous-ui/utils/isEqual' {
  import { isEqual } from 'meticulous-ui';
  export default isEqual;
}
declare module 'meticulous-ui/utils/isFeatureEnabled' {
  import { isFeatureEnabled } from 'meticulous-ui';
  export default isFeatureEnabled;
}
declare module 'meticulous-ui/utils/isGST' {
  import { isGST } from 'meticulous-ui';
  export default isGST;
}
declare module 'meticulous-ui/utils/isIOS' {
  import { isIOS } from 'meticulous-ui';
  export default isIOS;
}
declare module 'meticulous-ui/utils/isMobile' {
  import { isMobile } from 'meticulous-ui';
  export default isMobile;
}
declare module 'meticulous-ui/utils/isNonEmptyArray' {
  import { isNonEmptyArray } from 'meticulous-ui';
  export default isNonEmptyArray;
}
declare module 'meticulous-ui/utils/isOnline' {
  import { isOnline } from 'meticulous-ui';
  export default isOnline;
}
declare module 'meticulous-ui/utils/isPAN' {
  import { isPAN } from 'meticulous-ui';
  export default isPAN;
}
declare module 'meticulous-ui/utils/isPasswordStrong' {
  import { isPasswordStrong } from 'meticulous-ui';
  export default isPasswordStrong;
}
declare module 'meticulous-ui/utils/isPast' {
  import { isPast } from 'meticulous-ui';
  export default isPast;
}
declare module 'meticulous-ui/utils/isPhone' {
  import { isPhone } from 'meticulous-ui';
  export default isPhone;
}
declare module 'meticulous-ui/utils/isRequired' {
  import { isRequired } from 'meticulous-ui';
  export default isRequired;
}
declare module 'meticulous-ui/utils/isSafari' {
  import { isSafari } from 'meticulous-ui';
  export default isSafari;
}
declare module 'meticulous-ui/utils/isToday' {
  import { isToday } from 'meticulous-ui';
  export default isToday;
}
declare module 'meticulous-ui/utils/isURL' {
  import { isURL } from 'meticulous-ui';
  export default isURL;
}
declare module 'meticulous-ui/utils/kebabCase' {
  import { kebabCase } from 'meticulous-ui';
  export default kebabCase;
}
declare module 'meticulous-ui/utils/keyBy' {
  import { keyBy } from 'meticulous-ui';
  export default keyBy;
}
declare module 'meticulous-ui/utils/lazyLoadComponent' {
  import { lazyLoadComponent } from 'meticulous-ui';
  export default lazyLoadComponent;
}
declare module 'meticulous-ui/utils/lockBodyScroll' {
  import { lockBodyScroll } from 'meticulous-ui';
  export default lockBodyScroll;
}
declare module 'meticulous-ui/utils/logError' {
  import { logError } from 'meticulous-ui';
  export default logError;
}
declare module 'meticulous-ui/utils/logInfo' {
  import { logInfo } from 'meticulous-ui';
  export default logInfo;
}
declare module 'meticulous-ui/utils/logWarn' {
  import { logWarn } from 'meticulous-ui';
  export default logWarn;
}
declare module 'meticulous-ui/utils/maskEmail' {
  import { maskEmail } from 'meticulous-ui';
  export default maskEmail;
}
declare module 'meticulous-ui/utils/maskPhone' {
  import { maskPhone } from 'meticulous-ui';
  export default maskPhone;
}
declare module 'meticulous-ui/utils/maxLength' {
  import { maxLength } from 'meticulous-ui';
  export default maxLength;
}
declare module 'meticulous-ui/utils/measureElement' {
  import { measureElement } from 'meticulous-ui';
  export default measureElement;
}
declare module 'meticulous-ui/utils/measurePerformance' {
  import { measurePerformance } from 'meticulous-ui';
  export default measurePerformance;
}
declare module 'meticulous-ui/utils/memoize' {
  import { memoize } from 'meticulous-ui';
  export default memoize;
}
declare module 'meticulous-ui/utils/mergeDeep' {
  import { mergeDeep } from 'meticulous-ui';
  export default mergeDeep;
}
declare module 'meticulous-ui/utils/minLength' {
  import { minLength } from 'meticulous-ui';
  export default minLength;
}
declare module 'meticulous-ui/utils/multiSort' {
  import { multiSort } from 'meticulous-ui';
  export default multiSort;
}
declare module 'meticulous-ui/utils/noop' {
  import { noop } from 'meticulous-ui';
  export default noop;
}
declare module 'meticulous-ui/utils/omit' {
  import { omit } from 'meticulous-ui';
  export default omit;
}
declare module 'meticulous-ui/utils/once' {
  import { once } from 'meticulous-ui';
  export default once;
}
declare module 'meticulous-ui/utils/openInNewTab' {
  import { openInNewTab } from 'meticulous-ui';
  export default openInNewTab;
}
declare module 'meticulous-ui/utils/paginate' {
  import { paginate } from 'meticulous-ui';
  export default paginate;
}
declare module 'meticulous-ui/utils/parallel' {
  import { parallel } from 'meticulous-ui';
  export default parallel;
}
declare module 'meticulous-ui/utils/percentage' {
  import { percentage } from 'meticulous-ui';
  export default percentage;
}
declare module 'meticulous-ui/utils/permissionGuard' {
  import { permissionGuard } from 'meticulous-ui';
  export default permissionGuard;
}
declare module 'meticulous-ui/utils/pick' {
  import { pick } from 'meticulous-ui';
  export default pick;
}
declare module 'meticulous-ui/utils/pipe' {
  import { pipe } from 'meticulous-ui';
  export default pipe;
}
declare module 'meticulous-ui/utils/rafThrottle' {
  import { rafThrottle } from 'meticulous-ui';
  export default rafThrottle;
}
declare module 'meticulous-ui/utils/randomBetween' {
  import { randomBetween } from 'meticulous-ui';
  export default randomBetween;
}
declare module 'meticulous-ui/utils/randomInt' {
  import { randomInt } from 'meticulous-ui';
  export default randomInt;
}
declare module 'meticulous-ui/utils/randomValue' {
  import { randomValue } from 'meticulous-ui';
  export default randomValue;
}
declare module 'meticulous-ui/utils/redirectTo' {
  import { redirectTo } from 'meticulous-ui';
  export default redirectTo;
}
declare module 'meticulous-ui/utils/removeExtraSpaces' {
  import { removeExtraSpaces } from 'meticulous-ui';
  export default removeExtraSpaces;
}
declare module 'meticulous-ui/utils/removeLocalStorage' {
  import { removeLocalStorage } from 'meticulous-ui';
  export default removeLocalStorage;
}
declare module 'meticulous-ui/utils/removeQueryParam' {
  import { removeQueryParam } from 'meticulous-ui';
  export default removeQueryParam;
}
declare module 'meticulous-ui/utils/removeToken' {
  import { removeToken } from 'meticulous-ui';
  export default removeToken;
}
declare module 'meticulous-ui/utils/requestIdleTask' {
  import { requestIdleTask } from 'meticulous-ui';
  export default requestIdleTask;
}
declare module 'meticulous-ui/utils/retry' {
  import { retry } from 'meticulous-ui';
  export default retry;
}
declare module 'meticulous-ui/utils/roundTo' {
  import { roundTo } from 'meticulous-ui';
  export default roundTo;
}
declare module 'meticulous-ui/utils/safeAsync' {
  import { safeAsync } from 'meticulous-ui';
  export default safeAsync;
}
declare module 'meticulous-ui/utils/safeJSONParse' {
  import { safeJSONParse } from 'meticulous-ui';
  export default safeJSONParse;
}
declare module 'meticulous-ui/utils/safeJSONStringify' {
  import { safeJSONStringify } from 'meticulous-ui';
  export default safeJSONStringify;
}
declare module 'meticulous-ui/utils/scrollToElement' {
  import { scrollToElement } from 'meticulous-ui';
  export default scrollToElement;
}
declare module 'meticulous-ui/utils/scrollToTop' {
  import { scrollToTop } from 'meticulous-ui';
  export default scrollToTop;
}
declare module 'meticulous-ui/utils/sequential' {
  import { sequential } from 'meticulous-ui';
  export default sequential;
}
declare module 'meticulous-ui/utils/setLocalStorage' {
  import { setLocalStorage } from 'meticulous-ui';
  export default setLocalStorage;
}
declare module 'meticulous-ui/utils/setQueryParam' {
  import { setQueryParam } from 'meticulous-ui';
  export default setQueryParam;
}
declare module 'meticulous-ui/utils/setSessionStorage' {
  import { setSessionStorage } from 'meticulous-ui';
  export default setSessionStorage;
}
declare module 'meticulous-ui/utils/setToken' {
  import { setToken } from 'meticulous-ui';
  export default setToken;
}
declare module 'meticulous-ui/utils/singleton' {
  import { singleton } from 'meticulous-ui';
  export default singleton;
}
declare module 'meticulous-ui/utils/sleep' {
  import { sleep } from 'meticulous-ui';
  export default sleep;
}
declare module 'meticulous-ui/utils/slugify' {
  import { slugify } from 'meticulous-ui';
  export default slugify;
}
declare module 'meticulous-ui/utils/smoothScroll' {
  import { smoothScroll } from 'meticulous-ui';
  export default smoothScroll;
}
declare module 'meticulous-ui/utils/snakeCase' {
  import { snakeCase } from 'meticulous-ui';
  export default snakeCase;
}
declare module 'meticulous-ui/utils/sortBy' {
  import { sortBy } from 'meticulous-ui';
  export default sortBy;
}
declare module 'meticulous-ui/utils/throttle' {
  import { throttle } from 'meticulous-ui';
  export default throttle;
}
declare module 'meticulous-ui/utils/timeAgo' {
  import { timeAgo } from 'meticulous-ui';
  export default timeAgo;
}
declare module 'meticulous-ui/utils/titleCase' {
  import { titleCase } from 'meticulous-ui';
  export default titleCase;
}
declare module 'meticulous-ui/utils/toggleFullscreen' {
  import { toggleFullscreen } from 'meticulous-ui';
  export default toggleFullscreen;
}
declare module 'meticulous-ui/utils/trackEvent' {
  import { trackEvent } from 'meticulous-ui';
  export default trackEvent;
}
declare module 'meticulous-ui/utils/trackPageView' {
  import { trackPageView } from 'meticulous-ui';
  export default trackPageView;
}
declare module 'meticulous-ui/utils/trapFocus' {
  import { trapFocus } from 'meticulous-ui';
  export default trapFocus;
}
declare module 'meticulous-ui/utils/truncate' {
  import { truncate } from 'meticulous-ui';
  export default truncate;
}
declare module 'meticulous-ui/utils/uniqueBy' {
  import { uniqueBy } from 'meticulous-ui';
  export default uniqueBy;
}
declare module 'meticulous-ui/utils/unlockBodyScroll' {
  import { unlockBodyScroll } from 'meticulous-ui';
  export default unlockBodyScroll;
}
declare module 'meticulous-ui/utils/waitForTransitionEnd' {
  import { waitForTransitionEnd } from 'meticulous-ui';
  export default waitForTransitionEnd;
}
declare module 'meticulous-ui/utils/withTimeout' {
  import { withTimeout } from 'meticulous-ui';
  export default withTimeout;
}

// ---------------------------------------------------------------------------
// Individual hook sub-paths  (meticulous-ui/hooks/<name>)
// ---------------------------------------------------------------------------

declare module 'meticulous-ui/hooks/usePrevious' {
  import { usePrevious } from 'meticulous-ui';
  export default usePrevious;
}
declare module 'meticulous-ui/hooks/useDebounce' {
  import { useDebounce } from 'meticulous-ui';
  export default useDebounce;
}
declare module 'meticulous-ui/hooks/useThrottle' {
  import { useThrottle } from 'meticulous-ui';
  export default useThrottle;
}
declare module 'meticulous-ui/hooks/useToggle' {
  import { useToggle } from 'meticulous-ui';
  export default useToggle;
}
declare module 'meticulous-ui/hooks/useIsMounted' {
  import { useIsMounted } from 'meticulous-ui';
  export default useIsMounted;
}
declare module 'meticulous-ui/hooks/useUnmount' {
  import { useUnmount } from 'meticulous-ui';
  export default useUnmount;
}
declare module 'meticulous-ui/hooks/useFirstRender' {
  import { useFirstRender } from 'meticulous-ui';
  export default useFirstRender;
}
declare module 'meticulous-ui/hooks/useTimeout' {
  import { useTimeout } from 'meticulous-ui';
  export default useTimeout;
}
declare module 'meticulous-ui/hooks/useInterval' {
  import { useInterval } from 'meticulous-ui';
  export default useInterval;
}
declare module 'meticulous-ui/hooks/useEventListener' {
  import { useEventListener } from 'meticulous-ui';
  export default useEventListener;
}
declare module 'meticulous-ui/hooks/useIntersectionObserver' {
  import { useIntersectionObserver } from 'meticulous-ui';
  export default useIntersectionObserver;
}
declare module 'meticulous-ui/hooks/useMediaQuery' {
  import { useMediaQuery } from 'meticulous-ui';
  export default useMediaQuery;
}
declare module 'meticulous-ui/hooks/useOutsideClick' {
  import { useOutsideClick } from 'meticulous-ui';
  export default useOutsideClick;
}
declare module 'meticulous-ui/hooks/useWindowSize' {
  import { useWindowSize } from 'meticulous-ui';
  export default useWindowSize;
}
declare module 'meticulous-ui/hooks/useOnlineStatus' {
  import { useOnlineStatus } from 'meticulous-ui';
  export default useOnlineStatus;
}
declare module 'meticulous-ui/hooks/useLocalStorage' {
  import { useLocalStorage } from 'meticulous-ui';
  export default useLocalStorage;
}
declare module 'meticulous-ui/hooks/useSessionStorage' {
  import { useSessionStorage } from 'meticulous-ui';
  export default useSessionStorage;
}
declare module 'meticulous-ui/hooks/useCopyToClipboard' {
  import { useCopyToClipboard } from 'meticulous-ui';
  export default useCopyToClipboard;
}

// ---------------------------------------------------------------------------
// Individual reactUtils sub-paths  (meticulous-ui/reactUtils/<name>)
// ---------------------------------------------------------------------------

declare module 'meticulous-ui/reactUtils/createContextHook' {
  import { createContextHook } from 'meticulous-ui';
  export default createContextHook;
}
declare module 'meticulous-ui/reactUtils/composeProviders' {
  import { composeProviders } from 'meticulous-ui';
  export default composeProviders;
}
declare module 'meticulous-ui/reactUtils/lazyImport' {
  import { lazyImport } from 'meticulous-ui';
  export default lazyImport;
}
declare module 'meticulous-ui/reactUtils/withErrorBoundary' {
  import { withErrorBoundary } from 'meticulous-ui';
  export default withErrorBoundary;
}
declare module 'meticulous-ui/reactUtils/withSuspense' {
  import { withSuspense } from 'meticulous-ui';
  export default withSuspense;
}
declare module 'meticulous-ui/reactUtils/memoCompare' {
  import { memoCompare } from 'meticulous-ui';
  export default memoCompare;
}
declare module 'meticulous-ui/reactUtils/createPortalNode' {
  import { createPortalNode } from 'meticulous-ui';
  export default createPortalNode;
}

// ---------------------------------------------------------------------------
// Individual component sub-paths  (meticulous-ui/components/<Name>)
// ---------------------------------------------------------------------------

declare module 'meticulous-ui/components/Button' {
  import { Button, ButtonProps } from 'meticulous-ui';
  export { ButtonProps };
  export default Button;
}
declare module 'meticulous-ui/components/Carousel' {
  import { Carousel, CarouselProps } from 'meticulous-ui';
  export { CarouselProps };
  export default Carousel;
}
declare module 'meticulous-ui/components/Checkbox' {
  import { Checkbox, CheckboxProps } from 'meticulous-ui';
  export { CheckboxProps };
  export default Checkbox;
}
declare module 'meticulous-ui/components/DatePicker' {
  import { DatePicker, DatePickerProps } from 'meticulous-ui';
  export { DatePickerProps };
  export default DatePicker;
}
declare module 'meticulous-ui/components/Dropdown' {
  import { Dropdown, DropdownProps } from 'meticulous-ui';
  export { DropdownProps };
  export default Dropdown;
}
declare module 'meticulous-ui/components/FileUploader' {
  import { FileUploader, FileUploaderProps } from 'meticulous-ui';
  export { FileUploaderProps };
  export default FileUploader;
}
declare module 'meticulous-ui/components/Form' {
  import { Form, FormProps } from 'meticulous-ui';
  export { FormProps };
  export default Form;
}
declare module 'meticulous-ui/components/Grid' {
  import { Grid, GridProps } from 'meticulous-ui';
  export { GridProps };
  export default Grid;
}
declare module 'meticulous-ui/components/GridItem' {
  import { GridItem, GridItemProps } from 'meticulous-ui';
  export { GridItemProps };
  export default GridItem;
}
declare module 'meticulous-ui/components/Image' {
  import { Image, ImageProps } from 'meticulous-ui';
  export { ImageProps };
  export default Image;
}
declare module 'meticulous-ui/components/Input' {
  import { Input, InputProps } from 'meticulous-ui';
  export { InputProps };
  export default Input;
}
declare module 'meticulous-ui/components/Link' {
  import { Link, LinkProps } from 'meticulous-ui';
  export { LinkProps };
  export default Link;
}
declare module 'meticulous-ui/components/Loader' {
  import { Loader, LoaderProps } from 'meticulous-ui';
  export { LoaderProps };
  export default Loader;
}
declare module 'meticulous-ui/components/Modal' {
  import { Modal, ModalProps } from 'meticulous-ui';
  export { ModalProps };
  export default Modal;
}
declare module 'meticulous-ui/components/OtpInput' {
  import { OtpInput, OtpInputProps } from 'meticulous-ui';
  export { OtpInputProps };
  export default OtpInput;
}
declare module 'meticulous-ui/components/PageLoader' {
  import { PageLoader, PageLoaderProps } from 'meticulous-ui';
  export { PageLoaderProps };
  export default PageLoader;
}
declare module 'meticulous-ui/components/Pagination' {
  import { Pagination, PaginationProps } from 'meticulous-ui';
  export { PaginationProps };
  export default Pagination;
}
declare module 'meticulous-ui/components/RadioGroup' {
  import { RadioGroup, RadioGroupProps } from 'meticulous-ui';
  export { RadioGroupProps };
  export default RadioGroup;
}
declare module 'meticulous-ui/components/RootComponent' {
  import { RootComponent, RootComponentProps } from 'meticulous-ui';
  export { RootComponentProps };
  export default RootComponent;
}
declare module 'meticulous-ui/components/Selectbox' {
  import { Selectbox, SelectboxProps } from 'meticulous-ui';
  export { SelectboxProps };
  export default Selectbox;
}
declare module 'meticulous-ui/components/Shimmer' {
  import { Shimmer, ShimmerProps } from 'meticulous-ui';
  export { ShimmerProps };
  export default Shimmer;
}
declare module 'meticulous-ui/components/Sidebar' {
  import { Sidebar, SidebarProps } from 'meticulous-ui';
  export { SidebarProps };
  export default Sidebar;
}
declare module 'meticulous-ui/components/Spinner' {
  import { Spinner, SpinnerProps } from 'meticulous-ui';
  export { SpinnerProps };
  export default Spinner;
}
declare module 'meticulous-ui/components/Switch' {
  import { Switch, SwitchProps } from 'meticulous-ui';
  export { SwitchProps };
  export default Switch;
}
declare module 'meticulous-ui/components/Textarea' {
  import { Textarea, TextareaProps } from 'meticulous-ui';
  export { TextareaProps };
  export default Textarea;
}
declare module 'meticulous-ui/components/Timer' {
  import { Timer, TimerProps } from 'meticulous-ui';
  export { TimerProps };
  export default Timer;
}
declare module 'meticulous-ui/components/Toast' {
  import { Toast, ToastContainer, ToastProps, ToastContainerProps } from 'meticulous-ui';
  export { ToastProps, ToastContainerProps, ToastContainer };
  export default Toast;
}
declare module 'meticulous-ui/components/VideoPlayer' {
  import { VideoPlayer, VideoPlayerProps } from 'meticulous-ui';
  export { VideoPlayerProps };
  export default VideoPlayer;
}
declare module 'meticulous-ui/components/Typography/P' {
  import { P, PProps } from 'meticulous-ui';
  export { PProps };
  export default P;
}
declare module 'meticulous-ui/components/Typography/Headings' {
  import { Headings, H1, H2, H3, H4, H5, H6, TypographyProps } from 'meticulous-ui';
  export { H1, H2, H3, H4, H5, H6, TypographyProps };
  export default Headings;
}

// ---------------------------------------------------------------------------
// Icons  (meticulous-ui/components/Icons/<Name>)
// ---------------------------------------------------------------------------

/** Props shared by all icon components. */
export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Icon size in px. Default: 24. */
  size?: number;
  /** Icon fill/stroke color. Default: 'currentColor'. */
  color?: string;
}

declare module 'meticulous-ui/components/Icons/Add' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/AddCircle' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/AddCircleFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/ArrowDown' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/ArrowLeft' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/ArrowRight' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/ArrowUp' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/BagFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/BagOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/BellFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/BellOffFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/BellOffOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/BellOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/BookmarkFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/BookmarkOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/BoxCoveredFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/BoxCoveredOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/BoxFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/BoxOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/CalendarDays' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/CalendarLinesPen' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/CartCheckFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/CartCheckOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/CartCrossFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/CartCrossOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/CartFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/CartMinusFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/CartMinusOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/CartOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/CartPlusFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/CartPlusOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/Check' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/CheckDouble' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/ChevronDown' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/ChevronLeft' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/ChevronRight' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/ChevronUp' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/ClockCircleOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/ClockSquareOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/Close' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/CloseCircleFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/CloseCircleOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/CommentBubbleFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/CommentBubbleOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/CommentFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/CommentLineFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/CommentLineOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/CommentOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/ContactDetailsFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/ContactDetailsOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/DeliveryTruckFastFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/DeliveryTruckFastOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/DeliveryTruckLeftFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/DeliveryTruckLeftOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/DeliveryTruckRightFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/DeliveryTruckRightOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/DetailsOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/DiscordConversation' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/DiscordFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/DiscordOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/DoorClosedFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/DoorClosedOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/DoorOpenFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/DoorOpenOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/DotsHorizontalFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/DotsHorizontalOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/DotsVerticalFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/DotsVerticalOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/Download' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/DownloadBoxFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/DownloadBoxOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/EditBoxThick' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/EditBoxThin' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/EmailFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/EmailOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/ExitArrowInOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/ExitArrowOutOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/ExitFullScreen' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/ExitFullScreenThick' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/EyeClosed' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/EyeFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/EyeOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/FacebookFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/FacebookMessengerOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/FacebookOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/FacebookRoundFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/Filter' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/FilterList' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/FilterThickFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/FilterThickOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/FullScreenArrowThick' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/FullScreenArrowThin' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/FullScreenExit' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/FullScreenFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/FullScreenOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/HamburgerMenu' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/HamburgerSpaced' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/HeartFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/HeartOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/Help' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/HelpCircleFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/HelpCircleOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/HomeFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/HomeOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/Info' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/InfoCircleFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/InfoCircleOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/InfoSquareFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/InfoSquareOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/InstagramOuline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/InstagramRoundFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/KeyFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/KeyInSquareFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/KeyInSquareOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/KeyOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/KeySideSquareFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/KeySideSquareOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/KeySquareFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/KeySquareOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/Link' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/LinkedinFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/LinkedinOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/LinkedinRoundFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/Loading' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/LocationArrowFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/LocationArrowOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/LocationFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/LocationOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/LockKeyhole' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/LockKeyholeOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/LockKeyholeUnlocked' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/LockKeyholeUnlockedOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/MediaPauseCircleFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/MediaPauseCircleOuline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/MediaPauseFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/MediaPauseOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/MediaPlayCircleFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/MediaPlayCircleOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/MediaPlayFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/MediaPlayOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/MediaStopCircleFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/MediaStopCircleOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/MediaStopFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/MediaStopOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/Minus' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/MinusCircle' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/MinusCircleFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/MoneyBagOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/MoneyBriefcaseFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/MoneyBriefcaseOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/NoEntry' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/NoEntryFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/NoEntryOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/PaymentCardFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/PaymentCardOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/PhoneCallingFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/PhoneCallingOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/PhoneFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/PhoneOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/Pin' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/PinAddFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/PinAddOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/PinCircleFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/PinCircleOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/PinFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/PinOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/PinSubFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/PinSubOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/PinterestFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/PinterestOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/ProfileFemaleOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/ProfileGroupFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/ProfileMaleFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/ProfileMaleOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/RedditFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/RedditOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/RedditRoundFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/RedditRoundOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/RupeeOutlined' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/RupeeSign' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/SaveFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/SaveOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/Search' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/SettingFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/SettingOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/ShareAllFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/ShareAllOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/ShareBoxOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/ShareFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/ShareOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/ShareThickFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/ShieldCheckFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/ShieldCheckOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/ShieldCrossFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/ShieldCrossOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/ShieldFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/ShieldOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/ShieldWarningFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/ShieldWarningOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/SnapchatFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/SnapchatOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/SortBottomToTop' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/SortHorizontal' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/SortTopToBottom' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/SortVertical' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/StarFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/StarOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/TelegramFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/TelegramOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/TelegramRoundFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/ThumbsDownFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/ThumbsDownOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/ThumbsUpFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/ThumbsUpOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/TiktokBox' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/TiktokThickFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/TiktokThinFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/TrashBigFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/TrashBigOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/TrashFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/TrashLinesFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/TrashLinesOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/TrashOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/Upload' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/UploadBoxFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/UploadBoxOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/VolumeFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/VolumeMuteFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/VolumeMuteOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/VolumeOffFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/VolumeOffOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/VolumeOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/WalletFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/WalletOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/Warning' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/WarningCircleFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/WarningCircleOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/WarningSmall' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/WarningTriangleFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/WarningTriangleOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/WhatsappFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/WhatsappOutline' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/Youtube' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/YoutubeFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
declare module 'meticulous-ui/components/Icons/YoutubeRoundFilled' {
  import type { IconProps } from 'meticulous-ui';
  const C: React.FC<IconProps>;
  export default C;
}
