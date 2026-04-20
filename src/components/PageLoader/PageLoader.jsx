import _get from 'lodash-es/get';
import { getColor } from '../Input/Checkbox/helpers';
import { PageLdr } from './styles';
import blue from '../../colors/blue';

const PageLoader = ({ theme = 'blue', color, ...props }) => {
  const shade = getColor(theme);
  const clr = color || _get(shade, 'm500', blue.m500);

  return (
    <PageLdr
      {...props}
      $color={clr}
      role="progressbar"
      aria-label="Loading"
      aria-valuemin={0}
      aria-valuemax={100}
    />
  );
};

export default PageLoader;
