import styled, { keyframes, css } from 'styled-components';

const pulse = keyframes`
  0%, 40%, 100% {
    transform: scale(1);
  }
  20% {
    transform: scale(1.5);
  }
`;

export const LoaderWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ $gap }) => $gap};
`;

export const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

export const Dot = styled.span`
  display: inline-block;
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  border-radius: 50%;
  background-color: ${({ $color }) => $color};
  flex-shrink: 0;

  ${({ $delay }) => css`
    animation: ${pulse} 1s ease-in-out infinite;
    animation-delay: ${$delay}s;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}
`;
