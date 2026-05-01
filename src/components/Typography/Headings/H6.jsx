import styled from 'styled-components';
import PropTypes from 'prop-types';

const H6Wrapper = styled.h6`
  color: ${({ $color }) => $color};
  font-size: 1.92rem;
`;

const H6 = ({ color, children, ...rest }) => {
  return (
    <H6Wrapper $color={color} {...rest}>
      {children}
    </H6Wrapper>
  );
};

H6.propTypes = {
  /** Heading content */
  children: PropTypes.node,
  /** Text color (CSS color value or token) */
  color: PropTypes.string,
};

export default H6;
