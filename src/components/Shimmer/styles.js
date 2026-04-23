import styled, { keyframes } from 'styled-components';
import grey from '../../colors/grey';

const shimmerSweep = keyframes`
  from { transform: translateX(-100%); }
  to   { transform: translateX(100%); }
`;

export const ShimmerWrapper = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${grey.m300};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};

  &:after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      rgba(245, 245, 245, 0) 30%,
      ${grey.m100} 50%,
      rgba(245, 245, 245, 0) 70%
    );
    animation: ${shimmerSweep} 1.8s infinite;
  }
`;
