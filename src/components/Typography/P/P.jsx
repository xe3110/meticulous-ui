import { PWrapper } from './styles';
import _omit from 'lodash-es/omit';

const P = (props) => {
  const { color, size, children } = props || {};

  return (
    <PWrapper $color={color} $size={size} {..._omit(props, ['color', 'size', 'children'])}>
      {children}
    </PWrapper>
  );
};

export default P;
