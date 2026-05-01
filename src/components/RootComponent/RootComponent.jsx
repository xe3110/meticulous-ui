import { Root } from './styles';
import PropTypes from 'prop-types';

const RootComponent = ({ children, ...rest }) => {
  return <Root {...rest}>{children}</Root>;
};

RootComponent.propTypes = {
  /** Content to render inside the root wrapper */
  children: PropTypes.node,
};

export default RootComponent;
