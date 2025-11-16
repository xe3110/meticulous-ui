import styled, { keyframes } from 'styled-components';

import white from '../../colors/white';

// Icons
import Close from '../Icons/Close';
import grey from '../../colors/grey';

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%); /* Start off-screen to the right */
  }
  to {
    opacity: 1;
    transform: translateX(0); /* Move to its final position */
  }
`;

/* Define the animation for exit */
const slideOut = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100%); /* Move off-screen to the right */
  }
`;

export const ToastWrapper = styled.div`
  position: fixed;
  top: 1rem;
  right: 2rem;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ bg }) => bg};
  height: 4.8rem;
  width: 28rem;
  border-radius: 0.8rem;
  padding: 0.4rem 1.6rem;
  box-shadow: rgba(0, 0, 0, 0.14) 0px 3px 8px;
  opacity: 0;
  transition: all 0.5s ease;
  transform: translate(-50%, -20px); /* start slightly above */

  &.fade-in {
    opacity: 1;
    animation: ${slideIn} 0.5s ease-out forwards; /* slide down + fade */
  }

  &.fade-out {
    opacity: 0;
    animation: ${slideOut} 0.5s ease-in forwards; /* slide right */
  }
`;

export const LogoContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${white};
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
`;

export const Outer = styled.div`
  position: relative;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: ${({ side }) => side};
`;

export const Icon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ size }) => size}rem;
  height: ${({ size }) => size}rem;
`;

export const OuterChild = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${({ main }) => main};
`;

export const CloseWrapper = styled(Close)`
  cursor: pointer;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 1.2rem;
  color: ${grey.m800};
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  width: 21rem;
`;

export const Subtitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  color: ${grey.m700};
`;
