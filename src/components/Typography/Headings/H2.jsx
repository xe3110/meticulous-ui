import styled from 'styled-components';

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

export default H2;
