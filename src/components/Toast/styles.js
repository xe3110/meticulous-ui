import styled, { keyframes } from 'styled-components';

import white from '../../colors/white';

// Icons
import Close from '../Icons/Close';
import grey from '../../colors/grey';

const outerRingGrow = keyframes`
  from { transform: scale(0); }
  to   { transform: scale(1); }
`;

const innerRingGrow = keyframes`
  from { transform: translate(-50%, -50%) scale(0); }
  to   { transform: translate(-50%, -50%) scale(1); }
`;

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

  @media screen and (max-width: 480px) {
    height: 5.2rem;
    width: 30rem;
    border-radius: 0.88rem;
    padding: 0.44rem 1.12rem;
  }

  @media screen and (max-width: 380px) {
    height: 4.8rem;
    width: 27rem;
    border-radius: 0.8rem;
    padding: 0.4rem 1rem;
  }
`;

export const LogoContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${white};
  width: 2.88rem;
  height: 2.88rem;
  border-radius: 50%;

  @media screen and (max-width: 768px) {
    width: 2.16rem;
    height: 2.16rem;
  }

  @media screen and (max-width: 480px) {
    width: 1.92rem;
    height: 1.92rem;
  }

  @media screen and (max-width: 380px) {
    width: 1.76rem;
    height: 1.76rem;
  }
`;

export const Outer = styled.div`
  position: relative;
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 50%;
  background-color: ${({ $side }) => $side};
  animation: ${outerRingGrow} 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both;

  @media screen and (max-width: 768px) {
    width: 4.8rem;
    height: 4.8rem;
  }

  @media screen and (max-width: 480px) {
    width: 4.3rem;
    height: 4.3rem;
  }

  @media screen and (max-width: 380px) {
    width: 3.9rem;
    height: 3.9rem;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: ${({ $isWarning }) => ($isWarning ? '49%' : '50%')};
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ size }) => size}rem;
  height: ${({ size }) => size}rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    top: 42.8%;
    left: 42.8%;
    transform: translate(
      ${({ $isWarning }) => ($isWarning ? '-45.8%' : '-42.8%')},
      ${({ $isWarning }) => ($isWarning ? '-50.8%' : '-42.8%')}
    );
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
  animation: ${innerRingGrow} 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.65s both;

  @media screen and (max-width: 768px) {
    width: 3.6rem;
    height: 3.6rem;
  }

  @media screen and (max-width: 480px) {
    width: 3.2rem;
    height: 3.2rem;
  }

  @media screen and (max-width: 380px) {
    width: 2.9rem;
    height: 2.9rem;
  }
`;

const RING_CIRCUMFERENCE = 75.4; // 2 * π * 12

const timerProgress = keyframes`
  from { stroke-dashoffset: ${RING_CIRCUMFERENCE}; }
  to   { stroke-dashoffset: 0; }
`;

export const CloseButtonContainer = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 2.8rem;
  height: 2.8rem;
`;

export const ProgressRing = styled.svg`
  position: absolute;
  inset: 0;
  transform: rotate(-90deg);
  pointer-events: none;

  circle {
    fill: none;
    stroke: ${({ $color }) => $color};
    stroke-width: 2;
    stroke-linecap: round;
    stroke-dasharray: ${RING_CIRCUMFERENCE};
  }

  circle:first-child {
    opacity: 0.15;
    stroke-dashoffset: 0;
  }

  circle:last-child {
    stroke-dashoffset: ${RING_CIRCUMFERENCE};
    animation: ${timerProgress} ${({ $duration }) => $duration - 0.5}s linear forwards;
    animation-play-state: ${({ $paused }) => ($paused ? 'paused' : 'running')};
  }
`;

export const CloseWrapper = styled(Close)`
  cursor: pointer;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 1.92rem;
  color: ${grey.m800};

  @media screen and (max-width: 480px) {
    font-size: 1.72rem;
  }

  @media screen and (max-width: 380px) {
    font-size: 1.56rem;
  }
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.32rem;
  width: 33.6rem;

  @media screen and (max-width: 768px) {
    width: 24rem;
  }

  @media screen and (max-width: 480px) {
    width: 21rem;
  }

  @media screen and (max-width: 380px) {
    max-width: 18rem;
    width: auto;
  }
`;

export const Subtitle = styled.div`
  font-weight: 400;
  font-size: 1.6rem;
  color: ${grey.m700};

  @media screen and (max-width: 480px) {
    font-size: 1.44rem;
  }

  @media screen and (max-width: 380px) {
    font-size: 1.32rem;
  }
`;
