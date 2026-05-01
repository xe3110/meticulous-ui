import styled from 'styled-components';
import PropTypes from 'prop-types';

const H4Wrapper = styled.h4`
  color: ${({ $color }) => $color};
  font-size: 2.88rem;
`;

const H4 = ({ color, children, ...rest }) => {
  return (
    <H4Wrapper $color={color} {...rest}>
      {children}
    </H4Wrapper>
  );
};

H4.propTypes = {
  /** Heading content */
  children: PropTypes.node,
  /** Text color (CSS color value or token) */
  color: PropTypes.string,
};

export default H4;
