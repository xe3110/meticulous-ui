import { PWrapper } from './styles';

const P = ({ color, size, children }) => {
  return <PWrapper $color={color} $size={size}>{children}</PWrapper>;
};

export default P;
