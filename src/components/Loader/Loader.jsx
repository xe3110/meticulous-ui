import { MEDIUM, BLUE, SIZE, THEME_SHADE, ANIMATION_DELAYS } from './constants';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';
import blue from '../../colors/blue';
import green from '../../colors/green';
import red from '../../colors/red';
import yellow from '../../colors/yellow';
import orange from '../../colors/orange';
import black from '../../colors/black';
import grey from '../../colors/grey';
import violet from '../../colors/violet';
import teal from '../../colors/teal';
import purple from '../../colors/purple';
import pink from '../../colors/pink';

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

const getTheme = (clr) => COLOR_SHADE_MAP[clr] ?? blue;

const pulse = keyframes`
  0% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
  20% {
    transform: scale(1.6);
    animation-timing-function: ease-in;
  }
  40%, 100% {
    transform: scale(1);
  }
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0) scale(1);
    animation-timing-function: ease-in;
  }
  50% {
    transform: translateY(-160%) scale(1.4);
    animation-timing-function: ease-out;
  }
`;

const LoaderWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ $gap }) => $gap};
`;

const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

const Dot = styled.span`
  display: inline-block;
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  border-radius: 50%;
  background-color: ${({ $color }) => $color};
  flex-shrink: 0;

  ${({ $delay, $isBounce }) => css`
    animation: ${$isBounce ? bounce : pulse} ${$isBounce ? 1.2 : 1.3}s ease-in-out infinite;
    animation-delay: ${$delay}s;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}
`;

const Loader = ({ size = MEDIUM, theme = BLUE, isBounce, isMini, isMiniDark, ...rest }) => {
  const { dot, gap } = SIZE[size] || SIZE[MEDIUM];
  const colorPallette = getTheme(theme);
  const delays = ANIMATION_DELAYS;
  const shades = isMiniDark
    ? THEME_SHADE.slice(2, 6)
    : isMini
      ? THEME_SHADE.slice(0, 3)
      : THEME_SHADE;
  const colors = shades.map((shade) => colorPallette[shade] ?? colorPallette.m500);
  const dots = delays.map(() => dot);

  return (
    <LoaderWrapper role='status' $gap={gap} {...rest}>
      <VisuallyHidden>Loading</VisuallyHidden>
      {dots.map((dotSize, i) => (
        <Dot
          key={`dot-${i}`}
          aria-hidden='true'
          $size={dotSize}
          $color={colors[i]}
          $delay={delays[i]}
          $isBounce={isBounce}
        />
      ))}
    </LoaderWrapper>
  );
};

Loader.propTypes = {
  /** Loader size: `'small'`, `'medium'`, or `'large'`. Defaults to `'medium'` */
  size: PropTypes.string,
  /** Color theme key. Defaults to `'blue'` */
  theme: PropTypes.string,
  /** Switches dots to a bounce animation instead of fade */
  isBounce: PropTypes.bool,
  /** Renders a compact 3-dot variant */
  isMini: PropTypes.bool,
  /** Renders a compact dark 3-dot variant */
  isMiniDark: PropTypes.bool,
};

export default Loader;
