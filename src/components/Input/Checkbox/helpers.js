import _get from 'lodash-es/get';
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

const COLOR_SHADE_MAP = {
  blue,
  green,
  red,
  yellow,
  orange,
  black,
  grey,
  violet,
  teal,
  purple,
  pink,
};

export const getColor = (clr) => _get(COLOR_SHADE_MAP, clr, blue.m500);
