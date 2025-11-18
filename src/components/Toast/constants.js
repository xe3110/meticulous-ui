import green from '../../colors/green';
import orange from '../../colors/orange';
import red from '../../colors/red';
import blue from '../../colors/blue';

export const SUCCESS = 'success';
export const WARNING = 'warning';
export const INFO = 'info';
export const ERROR = 'error';

export const INFO_COLORS = {
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
  [WARNING]: {
    main: orange.m500,
    side: orange.m100,
    bg: orange.m50,
  },
  [INFO]: INFO_COLORS,
  [ERROR]: {
    main: red.m500,
    side: red.m100,
    bg: red.m50,
  },
};

export const TYPE_INFO_MAP = {
  [SUCCESS]: {
    title: 'Successfull',
    subtitle: 'You have logged in successfully',
  },
  [INFO]: {
    title: 'Info',
    subtitle: 'You will be logged out in 10 minutes',
  },
  [WARNING]: {
    title: 'Attention',
    subtitle: 'You will be logged out in 2 minutes',
  },
  [ERROR]: {
    title: 'Error',
    subtitle: 'Please check the password',
  },
};
