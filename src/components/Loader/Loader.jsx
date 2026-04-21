import _get from 'lodash-es/get';
import { LoaderWrapper, Dot, VisuallyHidden } from './styles';
import {
  MEDIUM,
  BLUE,
  SIZE,
  THEME_SHADE,
  ANIMATION_DELAYS,
  MINI_ANIMATION_DELAYS,
} from './constants';
import { getTheme } from './helpers';

const Loader = ({ size = MEDIUM, theme = BLUE, isBounce, isMini, isMiniDark }) => {
  const { dot, gap } = SIZE[size] || SIZE[MEDIUM];
  const colorPallette = getTheme(theme);
  const delays = isMini ? MINI_ANIMATION_DELAYS : ANIMATION_DELAYS;
  const shades = isMiniDark
    ? THEME_SHADE.slice(2, 6)
    : isMini
      ? THEME_SHADE.slice(0, 3)
      : THEME_SHADE;
  const colors = shades.map((shade) => _get(colorPallette, shade, colorPallette.m500));
  const dots = delays.map(() => dot);

  return (
    <LoaderWrapper role='status' $gap={gap}>
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

export default Loader;
