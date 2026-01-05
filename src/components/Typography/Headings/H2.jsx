import styled from 'styled-components';

const H2Wrapper = styled.h2`
  color: ${({ $color }) => $color};
  font-size: 3rem;
`;

const H2 = ({ color, children }) => {
  return <H2Wrapper $color={color}>{children}</H2Wrapper>;
};

export default H2;
