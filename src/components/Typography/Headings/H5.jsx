import styled from 'styled-components';

const H5Wrapper = styled.h5`
  color: ${({ $color }) => $color};
  font-size: 1.4rem;
`;

const H5 = ({ color, children, ...rest }) => {
  return (
    <H5Wrapper $color={color} {...rest}>
      {children}
    </H5Wrapper>
  );
};

export default H5;
