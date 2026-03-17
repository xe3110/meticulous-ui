import _get from 'lodash-es/get';
import { SpinnerWrapper } from './styles';
import colors from '../../colors';
import green from '../../colors/green';

const SIZE_PARAMS = {
  small: {
    $border: '0.25rem',
    $length: '1rem',
  },
  medium: {
    $border: '0.5rem',
    $length: '2rem',
  },
  large: {
    $border: '0.75rem',
    $length: '3rem',
  },
};

const Spinner = ({ color = 'green', size = 'medium' }) => {
  const { $border, $length } = SIZE_PARAMS[size];

  return <SpinnerWrapper $color={_get(colors, color, green)?.m500} {...{ $border, $length }} />;
};

export default Spinner;
