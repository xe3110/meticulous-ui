import styled from "styled-components";

const H1Wrapper = styled.h1`
  color: ${({$color}) => $color};
  font-size: 3.6rem;
`;

const H1 = ({ color, children }) => {
  return <H1Wrapper $color={color}>{children}</H1Wrapper>;
};

export default H1;
