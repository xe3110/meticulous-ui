import blue from '../../../colors/blue';
import green from '../../../colors/green';
import red from '../../../colors/red';
import yellow from '../../../colors/yellow';
import orange from '../../../colors/orange';
import black from '../../../colors/black';
import grey from '../../../colors/grey';
import violet from '../../../colors/violet';
import teal from '../../../colors/teal';
import purple from '../../../colors/purple';
import pink from '../../../colors/pink';
import allIcons from '../../Icons/iconsMap';

const COLOR_SHADE_MAP = {
  blue: blue.m500,
  green: green.m500,
  red: red.m500,
  green: green.m500,
  yellow: yellow.m500,
  orange: orange.m500,
  black: black.m500,
  grey: grey.m500,
  violet: violet.m500,
  teal: teal.m500,
  purple: purple.m500,
  pink: pink.m500,
};

export const getColor = (clr) => COLOR_SHADE_MAP[clr] ?? grey.m500;

export const getCssShade = ({ $hasError, $shade, $isFocused, value, $onlyPh }) => {
  if ($hasError) {
    return typeof value === 'string' && !value && !$isFocused ? grey.m500 : red.m400;
  }

  if ($isFocused && !$onlyPh) {
    return $shade;
  }

  return grey.m500;
};

export const getIcon = (icon) => allIcons[icon] ?? null;

export const getPadding = ({ $hasLeftIcon, $hasRightIcon }) => {
  if ($hasLeftIcon && $hasRightIcon) {
    return '0 3.84rem';
  }

  if ($hasLeftIcon) {
    return '0 0.96rem 0 3.84rem';
  }

  if ($hasRightIcon) {
    return '0 3.84rem 0 0.96rem';
  }

  return '0 0.96rem';
};
