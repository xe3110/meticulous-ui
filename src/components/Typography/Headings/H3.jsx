import styled from 'styled-components';
import PropTypes from 'prop-types';

const H3Wrapper = styled.h3`
  color: ${({ $color }) => $color};
  font-size: 3.84rem;
`;

const H3 = ({ color, children, ...rest }) => {
  return (
    <H3Wrapper $color={color} {...rest}>
      {children}
    </H3Wrapper>
  );
};

H3.propTypes = {
  /** Heading content */
  children: PropTypes.node,
  /** Text color (CSS color value or token) */
  color: PropTypes.string,
};

export default H3;
