import usePrevious from './usePrevious';
import useDebounce from './useDebounce';
import useThrottle from './useThrottle';
import useIsMounted from './useIsMounted';
import useEventListener from './useEventListener';
import useIntersectionObserver from './useIntersectionObserver';
import useMediaQuery from './useMediaQuery';
import useLocalStorage from './useLocalStorage';
import useSessionStorage from './useSessionStorage';
import useOutsideClick from './useOutsideClick';
import useWindowSize from './useWindowSize';
import useOnlineStatus from './useOnlineStatus';
import useCopyToClipboard from './useCopyToClipboard';
import useToggle from './useToggle';
import useTimeout from './useTimeout';
import useInterval from './useInterval';
import useUnmount from './useUnmount';
import useFirstRender from './useFirstRender';

export default {
  // state
  usePrevious,
  useDebounce,
  useThrottle,
  useToggle,

  // lifecycle
  useIsMounted,
  useUnmount,
  useFirstRender,
  useTimeout,
  useInterval,

  // dom / browser
  useEventListener,
  useIntersectionObserver,
  useMediaQuery,
  useOutsideClick,
  useWindowSize,
  useOnlineStatus,

  // storage
  useLocalStorage,
  useSessionStorage,

  // utility
  useCopyToClipboard,
};
