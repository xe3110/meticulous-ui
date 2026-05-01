import styled from 'styled-components';
import PropTypes from 'prop-types';

const H1Wrapper = styled.h1`
  color: ${({ $color }) => $color};
  font-size: 5.76rem;
`;

const H1 = ({ color, children, ...rest }) => {
  return (
    <H1Wrapper $color={color} {...rest}>
      {children}
    </H1Wrapper>
  );
};

H1.propTypes = {
  /** Heading content */
  children: PropTypes.node,
  /** Text color (CSS color value or token) */
  color: PropTypes.string,
};

export default H1;
