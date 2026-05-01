import styled, { css, keyframes } from 'styled-components';

import Add from '../../components/Icons/Add';
import MediaStopFilled from '../../components/Icons/MediaStopFilled';
import MediaPauseFilled from '../../components/Icons/MediaPauseFilled';
import MediaPlayFilled from '../../components/Icons/MediaPlayFilled';

import white from '../../colors/white';
import black from '../../colors/black';
import red from '../../colors/red';

import { COLOR_MAPPING } from './constants';
import { getSize } from './helpers';

const WRAPPER_RATIO = 1;
const WRAPPER_BR_RATIO = 16.67;
const DIMMER_RATIO = 1.67;
const TRANSFORM_ORIGIN_RATIO = 3.404;

const getColor = ({ $color }) => COLOR_MAPPING[$color];

const HAND_CSS = css`
  position: absolute;
  bottom: 50%;
  transform-origin: bottom;
  border-radius: 4px;
  transition: rotate 0.3s ease-in-out;
  rotate: var(--hand-rotate);
`;

export const Wrapper = styled.div`
  position: relative;
  height: ${getSize(WRAPPER_RATIO)}rem;
  width: ${getSize(WRAPPER_RATIO)}rem;
  border-radius: ${getSize(WRAPPER_BR_RATIO)}rem;
  background-color: ${getColor};
`;

export const Dimmer = styled.div`
  position: absolute;
  left: 50%;
  top: 48%;
  width: ${getSize(DIMMER_RATIO)}rem;
  height: ${getSize(DIMMER_RATIO)}rem;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.16);
  pointer-events: none;
`;

export const Time = styled.div`
  position: absolute;
  left: 50%;
  top: 48%;
  transform: translate(-50%, -50%);
`;

export const TimeTxt = styled.div`
  color: ${white};
  font-size: ${getSize(13.33)}rem;
  font-weight: 650;
  text-align: center;
  opacity: 0.84;
`;

export const Dots = styled.span`
  position: absolute;
  width: ${getSize(120)}rem;
  height: ${getSize(120)}rem;
  background: rgba(255, 255, 255, 0.4);
  transform-origin: ${getSize(TRANSFORM_ORIGIN_RATIO)}rem;
  border-radius: 2px;
  rotate: ${({ $i }) => `${$i * 6}deg`};

  &:nth-child(5n) {
    width: ${getSize(90)}rem;
    height: ${getSize(90)}rem;
    background: rgba(255, 255, 255, 0.7);
  }

  &:nth-child(15n) {
    width: ${getSize(50)}rem;
    height: ${getSize(130)}rem;
    background: rgba(255, 255, 255);
  }
`;

export const DotsWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const AllDots = styled.div`
  position: absolute;
  left: 1.6%;
  top: 43.8%;
  transform: translate(-50%, -50%) rotate(6.7deg);
`;

export const HourHand = styled.div`
  ${HAND_CSS};
  width: ${getSize(50)}rem;
  height: ${getSize(5.33)}rem;
  background: ${white};
`;

export const MinuteHand = styled.div`
  ${HAND_CSS};
  width: ${getSize(80)}rem;
  height: ${getSize(4)}rem;
  background: ${black.m200};
`;

export const SecondHand = styled.div`
  ${HAND_CSS};
  width: ${getSize(133.33)}rem;
  height: ${getSize(3.64)}rem;
  background: ${red.m800};
`;

const dismissAnimation = keyframes`
  from { opacity: 1; transform: scale(1); }
  to   { opacity: 0; transform: scale(0.9); }
`;

const digitSlideIn = keyframes`
  from { opacity: 0; transform: translateY(-5px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const labelEnter = keyframes`
  from { opacity: 0; transform: translateX(-50%) translateY(calc(-100% + 8px)) scale(0.9); }
  to   { opacity: 1; transform: translateX(-50%) translateY(-100%) scale(1); }
`;

const labelExit = keyframes`
  from { opacity: 1; transform: translateX(-50%) translateY(-100%) scale(1); }
  to   { opacity: 0; transform: translateX(-50%) translateY(calc(-100% + 8px)) scale(0.85); }
`;

export const TimerDigit = styled.span`
  display: inline-block;
  animation: ${digitSlideIn} 0.28s cubic-bezier(0.34, 1.56, 0.64, 1) both;
`;

export const AlarmRing = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  border-radius: inherit;
  background: radial-gradient(
    ellipse 88% 88% at 50% 48%,
    rgba(0, 0, 0, 0) 18%,
    rgba(0, 0, 0, 0.05) 42%,
    rgba(0, 0, 0, 0.16) 65%,
    rgba(0, 0, 0, 0.3) 85%,
    rgba(0, 0, 0, 0.42) 100%
  );
  ${({ $dismissing }) =>
    $dismissing &&
    css`
      animation: ${dismissAnimation} 0.6s ease-out forwards;
    `}
`;

export const AlarmLabel = styled.div`
  position: absolute;
  left: 50%;
  top: calc(${getSize(100 / 12)}rem - ${getSize(55)}rem);
  display: flex;
  align-items: center;
  gap: 0.3em;
  white-space: nowrap;
  color: rgba(255, 255, 255, 0.82);
  font-size: ${getSize(21)}rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  padding: 0.22em 0.6em;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  pointer-events: none;
  animation: ${({ $dismissing }) =>
    $dismissing
      ? css`
          ${labelExit} 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards
        `
      : css`
          ${labelEnter} 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both
        `};
`;

export const LeftActions = styled.div`
  position: absolute;
  bottom: 6%;
  left: 8%;
  display: flex;
  align-items: center;
  gap: ${getSize(50)}rem;

  ${({ $noActions }) =>
    $noActions &&
    css`
      pointer-events: none;
      opacity: 0.5;
    `}
`;

export const RightActions = styled.div`
  position: absolute;
  bottom: 6%;
  right: 8%;
  border-radius: ${getSize(50)}rem;
`;

export const ActionBtn = styled.button`
  position: relative;
  height: ${getSize(8.33)}rem;
  width: ${getSize(8.33)}rem;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.28);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${getSize(50)}rem;
  padding: 0;

  &:focus-visible {
    outline: 2px solid ${white};
    outline-offset: 2px;
  }
`;

export const AddWrapper = styled(Add)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const MediaStopFilledWrapper = styled(MediaStopFilled)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const MediaPauseFilledWrapper = styled(MediaPauseFilled)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const MediaPlayFilledWrapper = styled(MediaPlayFilled)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
`;

export const Bullet = styled.div`
  position: absolute;
  width: ${getSize(35)}rem;
  height: ${getSize(35)}rem;
  border-radius: 50%;
  background-color: ${white};
  left: calc(-${getSize(70)}rem);
  top: calc(-${getSize(100 / 33)}rem - ${getSize(70)}rem);
`;

export const BulletRing = styled.div`
  position: absolute;
  left: 50%;
  top: 48%;
  width: 0;
  height: 0;
  rotate: var(--bullet-rotate);
  transform-origin: 0 0;
  transition: rotate 0.3s ease;
  ${({ $dismissing }) =>
    $dismissing &&
    css`
      animation: ${dismissAnimation} 0.6s ease-out forwards;
    `}
`;
