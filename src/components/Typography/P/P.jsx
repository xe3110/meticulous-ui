import { PWrapper } from './styles';
import PropTypes from 'prop-types';

const P = ({ color, size, children, ...rest }) => {
  return (
    <PWrapper $color={color} $size={size} {...rest}>
      {children}
    </PWrapper>
  );
};

P.propTypes = {
  /** Paragraph content */
  children: PropTypes.node,
  /** Text color (CSS color value or token) */
  color: PropTypes.string,
  /** Font size (CSS value, e.g. `'1.6rem'`) */
  size: PropTypes.string,
};

export default P;
