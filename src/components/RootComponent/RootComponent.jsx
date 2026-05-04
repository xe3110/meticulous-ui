import PropTypes from 'prop-types';
import styled from 'styled-components';

const Root = styled.div`
  font-size: 62.5%;
  -webkit-text-size-adjust: 100%;
`;

const RootComponent = ({ children, ...rest }) => {
  return <Root {...rest}>{children}</Root>;
};

RootComponent.propTypes = {
  /** Content to render inside the root wrapper */
  children: PropTypes.node,
};

export default RootComponent;
