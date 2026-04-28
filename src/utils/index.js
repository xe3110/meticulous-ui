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
};
