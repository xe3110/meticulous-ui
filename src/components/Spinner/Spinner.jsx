import colors from '../../colors/colorMap';
import green from '../../colors/green';
import white from '../../colors/white';
import grey from '../../colors/grey';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 100, 200;
    stroke-dashoffset: -15;
  }
  100% {
    stroke-dasharray: 100, 200;
    stroke-dashoffset: -125;
  }
`;

const SpinnerSVG = styled.svg`
  animation: ${rotate} 1.4s linear infinite;
  transform-origin: center;
`;

const SpinnerCircle = styled.circle`
  animation: ${dash} 1.4s ease-in-out infinite;
`;

const SIZE_PARAMS = {
  small: { strokeWidth: 6, $length: '2.4rem' },
  medium: { strokeWidth: 5, $length: '3.6rem' },
  large: { strokeWidth: 5, $length: '5rem' },
};

const Spinner = ({ color = 'green', size = 'medium', ...rest }) => {
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
      {...rest}
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

Spinner.propTypes = {
  /** Color theme key (e.g. `'green'`, `'blue'`) or a raw color value. Defaults to `'green'` */
  color: PropTypes.string,
  /** Spinner size: `'small'`, `'medium'`, or `'large'`. Defaults to `'medium'` */
  size: PropTypes.string,
};

export default Spinner;
