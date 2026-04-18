import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 100, 200;
    stroke-dashoffset: -15;
  }
  100% {
    stroke-dasharray: 100, 200;
    stroke-dashoffset: -125;
  }
`;

export const SpinnerSVG = styled.svg`
  animation: ${rotate} 1.4s linear infinite;
  transform-origin: center;
`;

export const SpinnerCircle = styled.circle`
  animation: ${dash} 1.4s ease-in-out infinite;
`;
