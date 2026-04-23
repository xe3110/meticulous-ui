import styled from 'styled-components';

const H1Wrapper = styled.h1`
  color: ${({ $color }) => $color};
  font-size: 3.6rem;
`;

const H1 = ({ color, children, ...rest }) => {
  return <H1Wrapper $color={color} {...rest}>{children}</H1Wrapper>;
};

export default H1;
