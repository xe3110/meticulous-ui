import styled from 'styled-components';

const H6Wrapper = styled.h6`
  color: ${({ $color }) => $color};
  font-size: 1.2rem;
`;

const H6 = ({ color, children, ...rest }) => {
  return (
    <H6Wrapper $color={color} {...rest}>
      {children}
    </H6Wrapper>
  );
};

export default H6;
