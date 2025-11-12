import green from '../../colors/green';
import blue from '../../colors/blue';
import red from '../../colors/red';

export const SUCCESS = 'success';
export const WARNING = 'warning';
export const ERROR = 'error';

export const WARNING_COLORS = {
  main: blue.m500,
  side: blue.m100,
  bg: blue.m50,
};

export const COLOR_MAP = {
  [SUCCESS]: {
    main: green.m500,
    side: green.m100,
    bg: green.m50,
  },
  [WARNING]: WARNING_COLORS,
  [ERROR]: {
    main: red.m500,
    side: red.m100,
    bg: red.m50,
  },
};
