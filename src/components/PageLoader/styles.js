import styled, { keyframes } from 'styled-components';

const horizontalGrow = keyframes`
  0%   { transform: scaleX(0); }
  100% { transform: scaleX(1); }
`;

export const PageLdr = styled.div`
  width: 90%;
  height: 3px;
  background-color: ${({ $color }) => $color};
  transform-origin: left;
  animation: ${horizontalGrow} 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
`;
