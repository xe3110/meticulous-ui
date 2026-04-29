import capFirstLetter from './capFirstLetter';
import capitalize from './capitalize';
import camelCase from './camelCase';
import chunk from './chunk';
import clamp from './clamp';
import compose from './compose';
import deepClone from './deepClone';
import flattenObject from './flattenObject';
import formatCompactNumber from './formatCompactNumber';
import formatCurrency from './formatCurrency';
import formatDate from './formatDate';
import formatNumber from './formatNumber';
import formatTime from './formatTime';
import generateInitials from './generateInitials';
import getGreetingByTime from './getGreetingByTime';
import groupBy from './groupBy';
import hasEqualProps from './hasEqualProps';
import addDays from './addDays';
import countdown from './countdown';
import differenceInDays from './differenceInDays';
import isEmpty from './isEmpty';
import isEqual from './isEqual';
import isNonEmptyArray from './isNonEmptyArray';
import isPast from './isPast';
import isToday from './isToday';
import kebabCase from './kebabCase';
import keyBy from './keyBy';
import maskEmail from './maskEmail';
import maskPhone from './maskPhone';
import mergeDeep from './mergeDeep';
import omit from './omit';
import percentage from './percentage';
import pick from './pick';
import randomBetween from './randomBetween';
import randomInt from './randomInt';
import randomValue from './randomValue';
import removeExtraSpaces from './removeExtraSpaces';
import roundTo from './roundTo';
import slugify from './slugify';
import snakeCase from './snakeCase';
import sortBy from './sortBy';
import timeAgo from './timeAgo';
import titleCase from './titleCase';
import truncate from './truncate';
import uniqueBy from './uniqueBy';
import isEmail from './isEmail';
import isPhone from './isPhone';
import isURL from './isURL';
import isPasswordStrong from './isPasswordStrong';
import isPAN from './isPAN';
import isAadhaar from './isAadhaar';
import isGST from './isGST';
import isRequired from './isRequired';
import minLength from './minLength';
import maxLength from './maxLength';
import isMobile from './isMobile';
import isIOS from './isIOS';
import isAndroid from './isAndroid';
import isSafari from './isSafari';
import isDarkMode from './isDarkMode';
import isOnline from './isOnline';
import copyToClipboard from './copyToClipboard';
import downloadFile from './downloadFile';
import openInNewTab from './openInNewTab';
import getScreenSize from './getScreenSize';
import getQueryParams from './getQueryParams';
import setQueryParam from './setQueryParam';
import removeQueryParam from './removeQueryParam';
import buildURL from './buildURL';
import redirectTo from './redirectTo';
import getCurrentPath from './getCurrentPath';
import isActiveRoute from './isActiveRoute';
import setLocalStorage from './setLocalStorage';
import getLocalStorage from './getLocalStorage';
import removeLocalStorage from './removeLocalStorage';
import setSessionStorage from './setSessionStorage';
import getSessionStorage from './getSessionStorage';
import clearStorage from './clearStorage';
import debounce from './debounce';
import throttle from './throttle';
import memoize from './memoize';
import lazyLoadComponent from './lazyLoadComponent';
import requestIdleTask from './requestIdleTask';
import rafThrottle from './rafThrottle';
import scrollToTop from './scrollToTop';
import scrollToElement from './scrollToElement';
import lockBodyScroll from './lockBodyScroll';
import unlockBodyScroll from './unlockBodyScroll';
import toggleFullscreen from './toggleFullscreen';
import focusElement from './focusElement';
import detectOutsideClick from './detectOutsideClick';
import measureElement from './measureElement';
import announceToScreenReader from './announceToScreenReader';
import trapFocus from './trapFocus';
import generateAriaId from './generateAriaId';
import handleKeyboardNavigation from './handleKeyboardNavigation';
import logError from './logError';
import captureException from './captureException';
import safeJSONParse from './safeJSONParse';
import safeJSONStringify from './safeJSONStringify';
import fallback from './fallback';
import isAuthenticated from './isAuthenticated';
import getToken from './getToken';
import setToken from './setToken';
import removeToken from './removeToken';
import decodeJWT from './decodeJWT';
import hasPermission from './hasPermission';
import isFeatureEnabled from './isFeatureEnabled';
import getVariant from './getVariant';
import retry from './retry';
import sleep from './sleep';
import withTimeout from './withTimeout';
import parallel from './parallel';
import sequential from './sequential';
import safeAsync from './safeAsync';
import cancelablePromise from './cancelablePromise';
import fuzzySearch from './fuzzySearch';
import filterByKey from './filterByKey';
import multiSort from './multiSort';
import paginate from './paginate';
import fadeIn from './fadeIn';
import fadeOut from './fadeOut';
import smoothScroll from './smoothScroll';
import waitForTransitionEnd from './waitForTransitionEnd';
import trackEvent from './trackEvent';
import trackPageView from './trackPageView';
import measurePerformance from './measurePerformance';
import featureGate from './featureGate';
import permissionGuard from './permissionGuard';
import auditLog from './auditLog';
import logInfo from './logInfo';
import logWarn from './logWarn';
import once from './once';
import noop from './noop';
import identity from './identity';
import pipe from './pipe';
import singleton from './singleton';
import createPubSub from './createPubSub';
import deepFreeze from './deepFreeze';

export default {
  // string
  capFirstLetter,
  capitalize,
  camelCase,
  generateInitials,
  kebabCase,
  maskEmail,
  maskPhone,
  removeExtraSpaces,
  slugify,
  snakeCase,
  titleCase,
  truncate,

  // number
  clamp,
  formatCompactNumber,
  formatCurrency,
  formatNumber,
  percentage,
  randomBetween,
  randomInt,
  randomValue,
  roundTo,

  // date-time
  addDays,
  countdown,
  differenceInDays,
  formatDate,
  formatTime,
  getGreetingByTime,
  isPast,
  isToday,
  timeAgo,

  // object / array
  chunk,
  compose,
  deepClone,
  flattenObject,
  groupBy,
  hasEqualProps,
  isEmpty,
  isEqual,
  isNonEmptyArray,
  keyBy,
  mergeDeep,
  omit,
  pick,
  sortBy,
  uniqueBy,

  // validation
  isEmail,
  isPhone,
  isURL,
  isPasswordStrong,
  isPAN,
  isAadhaar,
  isGST,
  isRequired,
  minLength,
  maxLength,

  // device
  isMobile,
  isIOS,
  isAndroid,
  isSafari,
  isDarkMode,
  isOnline,
  copyToClipboard,
  downloadFile,
  openInNewTab,
  getScreenSize,

  // routing
  getQueryParams,
  setQueryParam,
  removeQueryParam,
  buildURL,
  redirectTo,
  getCurrentPath,
  isActiveRoute,

  // storage
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
  setSessionStorage,
  getSessionStorage,
  clearStorage,

  // performance
  debounce,
  throttle,
  memoize,
  lazyLoadComponent,
  requestIdleTask,
  rafThrottle,

  // ui / dom
  scrollToTop,
  scrollToElement,
  lockBodyScroll,
  unlockBodyScroll,
  toggleFullscreen,
  focusElement,
  detectOutsideClick,
  measureElement,

  // accessibility
  announceToScreenReader,
  trapFocus,
  generateAriaId,
  handleKeyboardNavigation,

  // error handling
  logError,
  captureException,
  safeJSONParse,
  safeJSONStringify,
  fallback,

  // auth
  isAuthenticated,
  getToken,
  setToken,
  removeToken,
  decodeJWT,
  hasPermission,

  // feature flags
  isFeatureEnabled,
  getVariant,

  // async / api
  retry,
  sleep,
  withTimeout,
  parallel,
  sequential,
  safeAsync,
  cancelablePromise,

  // filter
  fuzzySearch,
  filterByKey,
  multiSort,
  paginate,

  // animation
  fadeIn,
  fadeOut,
  smoothScroll,
  waitForTransitionEnd,

  // enterprise
  trackEvent,
  trackPageView,
  measurePerformance,
  featureGate,
  permissionGuard,
  auditLog,
  logInfo,
  logWarn,

  // function
  once,
  noop,
  identity,
  pipe,
  singleton,
  createPubSub,
  deepFreeze,
};
