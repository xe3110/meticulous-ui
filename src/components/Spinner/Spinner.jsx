import { SpinnerSVG, SpinnerCircle } from './styles';
import colors from '../../colors';
import green from '../../colors/green';
import white from '../../colors/white';
import grey from '../../colors/grey';

const SIZE_PARAMS = {
  small: { strokeWidth: 6, $length: '1rem' },
  medium: { strokeWidth: 5, $length: '2rem' },
  large: { strokeWidth: 5, $length: '3rem' },
};

const Spinner = ({ color = 'green', size = 'medium' }) => {
  const { strokeWidth, $length } = SIZE_PARAMS[size];
  const colorValue = [white, grey.m600].includes(color) ? color : (colors[color] ?? green)?.m500;

  return (
    <SpinnerSVG
      viewBox='0 0 50 50'
      width={$length}
      height={$length}
      role='status'
      aria-label='Loading'
      aria-live='polite'
    >
      <SpinnerCircle
        cx='25'
        cy='25'
        r='20'
        fill='none'
        stroke={colorValue}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
      />
    </SpinnerSVG>
  );
};

export default Spinner;
