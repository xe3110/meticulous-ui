import styled from "styled-components";

const H3Wrapper = styled.h3`
  color: ${({$color}) => $color};
  font-size: 2.4rem;
`;

const H3 = ({ color, children }) => {
  return <H3Wrapper $color={color}>{children}</H3Wrapper>;
};

export default H3;
