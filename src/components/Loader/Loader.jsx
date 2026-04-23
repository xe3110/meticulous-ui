import { LoaderWrapper, Dot, VisuallyHidden } from './styles';
import { MEDIUM, BLUE, SIZE, THEME_SHADE, ANIMATION_DELAYS } from './constants';
import { getTheme } from './helpers';

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

export default Loader;
