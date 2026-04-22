import { PWrapper } from './styles';

const P = ({ color, size, children, ...rest }) => {
  return (
    <PWrapper $color={color} $size={size} {...rest}>
      {children}
    </PWrapper>
  );
};

export default P;
