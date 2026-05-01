import styled from 'styled-components';
import PropTypes from 'prop-types';

const H2Wrapper = styled.h2`
  color: ${({ $color }) => $color};
  font-size: 4.8rem;
`;

const H2 = ({ color, children, ...rest }) => {
  return (
    <H2Wrapper $color={color} {...rest}>
      {children}
    </H2Wrapper>
  );
};

H2.propTypes = {
  /** Heading content */
  children: PropTypes.node,
  /** Text color (CSS color value or token) */
  color: PropTypes.string,
};

export default H2;
