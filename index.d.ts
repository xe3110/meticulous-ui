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
