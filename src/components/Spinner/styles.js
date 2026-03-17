import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerWrapper = styled.div`
  border: ${({ $border }) => $border} solid #f3f3f3;
  border-top: ${({ $border, $color }) => `${$border} solid ${$color}`};
  border-radius: 50%;
  width: ${({ $length }) => $length};
  height: ${({ $length }) => $length};
  animation: ${spin} 1s linear infinite;
`;
