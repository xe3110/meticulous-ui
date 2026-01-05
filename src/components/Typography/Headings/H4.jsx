import styled from "styled-components";

const H4Wrapper = styled.h4`
  color: ${({$color}) => $color};
  font-size: 1.8rem;
`;

const H4 = ({ color, children }) => {
  return <H4Wrapper $color={color}>{children}</H4Wrapper>;
};

export default H4;
