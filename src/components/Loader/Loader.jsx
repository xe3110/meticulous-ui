import _get from 'lodash-es/get';
import { LoaderWrapper, Dot, VisuallyHidden } from './styles';
import { MEDIUM, BLUE, SIZE, THEME_SHADE, ANIMATION_DELAYS } from './constants';
import { getTheme } from './helpers';

const Loader = ({ size = MEDIUM, theme = BLUE, isBounce }) => {
  const { dot, gap } = SIZE[size] || SIZE[MEDIUM];
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
