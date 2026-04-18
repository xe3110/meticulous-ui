import _get from 'lodash-es/get';
import { LoaderWrapper, Dot, VisuallyHidden } from './styles';
import { MEDIUM, BLUE, SIZE, THEME_SHADE, ANIMATION_DELAYS, SIZE_BOUNCE } from './constants';
import { getTheme } from './helpers';

const Loader = ({ size = MEDIUM, theme = BLUE, isBounce }) => {
  const sizeMap = isBounce ? SIZE_BOUNCE : SIZE;
  const { dot, gap } = sizeMap[size] || sizeMap[MEDIUM];
  const colorPallette = getTheme(theme);
  const colors = THEME_SHADE.map((shade) => _get(colorPallette, shade, colorPallette.m500));
  const dots = ANIMATION_DELAYS.map(() => dot);

  return (
    <LoaderWrapper role='status' $gap={gap}>
      <VisuallyHidden>Loading</VisuallyHidden>
      {dots.map((dotSize, i) => (
        <Dot
          key={`dot-${i}`}
          aria-hidden='true'
          $size={dotSize}
          $color={colors[i]}
          $delay={ANIMATION_DELAYS[i]}
          $isBounce={isBounce}
        />
      ))}
    </LoaderWrapper>
  );
};

export default Loader;
