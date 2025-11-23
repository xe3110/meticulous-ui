import styled, { css, keyframes } from 'styled-components';

import white from '../../colors/white';

// Icons
import Close from '../Icons/Close';
import grey from '../../colors/grey';
import { WARNING } from './constants';

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

export const ToastsContainer = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 9999;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ToastWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ $bg }) => $bg};
  height: 4.8rem;
  width: 28rem;
  border-radius: 0.8rem;
  padding: 0.4rem 1.6rem;
  box-shadow: rgba(0, 0, 0, 0.14) 0px 3px 8px;
  transition: all 0.5s ease;

  &.fade-in {
    opacity: 1;
    animation: ${slideIn} 0.5s ease-out forwards; /* slide down + fade */
  }

  &.fade-out {
    opacity: 0;
    animation: ${slideOut} 0.5s ease-in forwards; /* slide right */
  }

  @media screen and (max-width: 768px) {
    height: 3.6rem;
    width: 21rem;
    border-radius: 0.6rem;
    padding: 0.3rem 0.8rem;
  }
`;

export const LogoContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${white};

  ${({ type, $main }) =>
    type === WARNING
      ? css`
          top: 48%;
          border-color: ${$main} ${$main} ${white} ${$main};
          border-style: solid;
          border-width: 0 0.9rem 1.4rem 0.9rem;
          height: 0;
          width: 0;
        `
      : css`
          top: 50%;
          width: 1.8rem;
          height: 1.8rem;
          border-radius: 50%;
        `}

  @media screen and (max-width: 768px) {
    ${({ type, $main }) =>
      type === WARNING
        ? css`
            top: 48%;
            border-color: ${$main} ${$main} ${white} ${$main};
            border-style: solid;
            border-width: 0 0.7rem 1.05rem 0.68rem;
            height: 0;
            width: 0;
          `
        : css`
            top: 50%;
            width: 1.35rem;
            height: 1.35rem;
            border-radius: 50%;
          `}
  }
`;

export const Outer = styled.div`
  position: relative;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: ${({ $side }) => $side};

  @media screen and (max-width: 768px) {
    width: 3rem;
    height: 3rem;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ size }) => size}rem;
  height: ${({ size }) => size}rem;

  @media screen and (max-width: 768px) {
    top: 42.8%;
    left: 42.8%;
    transform: translate(-42.8%, -42.8%);
    scale: 0.75;
  }
`;

export const OuterChild = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${({ $main }) => $main};

  @media screen and (max-width: 768px) {
    width: 2.25rem;
    height: 2.25rem;
  }
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

  @media screen and (max-width: 768px) {
    width: 15rem;
  }
`;

export const Subtitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  color: ${grey.m700};
`;
