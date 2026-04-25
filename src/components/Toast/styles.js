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
  top: 1.6rem;
  right: 1.6rem;
  z-index: 9999;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const ToastWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ $bg }) => $bg};
  height: 7.68rem;
  width: 44.8rem;
  border-radius: 1.28rem;
  padding: 0.64rem 2.56rem;
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
    height: 5.76rem;
    width: 33.6rem;
    border-radius: 0.96rem;
    padding: 0.48rem 1.28rem;
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
          border-width: 0 1.44rem 2.24rem 1.44rem;
          height: 0;
          width: 0;
        `
      : css`
          top: 50%;
          width: 2.88rem;
          height: 2.88rem;
          border-radius: 50%;
        `}

  @media screen and (max-width: 768px) {
    ${({ type, $main }) =>
      type === WARNING
        ? css`
            top: 48%;
            border-color: ${$main} ${$main} ${white} ${$main};
            border-style: solid;
            border-width: 0 1.12rem 1.68rem 1.088rem;
            height: 0;
            width: 0;
          `
        : css`
            top: 50%;
            width: 2.16rem;
            height: 2.16rem;
            border-radius: 50%;
          `}
  }
`;

export const Outer = styled.div`
  position: relative;
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 50%;
  background-color: ${({ $side }) => $side};

  @media screen and (max-width: 768px) {
    width: 4.8rem;
    height: 4.8rem;
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
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  background-color: ${({ $main }) => $main};

  @media screen and (max-width: 768px) {
    width: 3.6rem;
    height: 3.6rem;
  }
`;

export const CloseWrapper = styled(Close)`
  cursor: pointer;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 1.92rem;
  color: ${grey.m800};
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.32rem;
  width: 33.6rem;

  @media screen and (max-width: 768px) {
    width: 24rem;
  }
`;

export const Subtitle = styled.div`
  font-weight: 400;
  font-size: 1.6rem;
  color: ${grey.m700};
`;
