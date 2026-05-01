import styled from 'styled-components';
import PropTypes from 'prop-types';

const H5Wrapper = styled.h5`
  color: ${({ $color }) => $color};
  font-size: 2.24rem;
`;

const H5 = ({ color, children, ...rest }) => {
  return (
    <H5Wrapper $color={color} {...rest}>
      {children}
    </H5Wrapper>
  );
};

H5.propTypes = {
  /** Heading content */
  children: PropTypes.node,
  /** Text color (CSS color value or token) */
  color: PropTypes.string,
};

export default H5;
