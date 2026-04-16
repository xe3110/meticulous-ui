import styled, { css } from 'styled-components';

import Add from '../../components/Icons/Add';
import MediaStopFilled from '../../components/Icons/MediaStopFilled';
import MediaPauseFilled from '../../components/Icons/MediaPauseFilled';
import MediaPlayFilled from '../../components/Icons/MediaPlayFilled';

import white from '../../colors/white';
import black from '../../colors/black';
import red from '../../colors/red';

import { COLOR_MAPPING } from './constants';

const getColor = ({ $color }) => COLOR_MAPPING[$color];

const HAND_CSS = css`
  position: absolute;
  bottom: 50%;
  transform-origin: bottom;
  border-radius: 4px;
  transition: rotate 0.3s ease-in-out;
  rotate: ${({ $rotate }) => $rotate}deg;
`;

export const Wrapper = styled.div`
  position: relative;
  height: 20rem;
  width: 20rem;
  border-radius: 1.2rem;
  background-color: ${getColor};
`;

export const Dimmer = styled.div`
  position: absolute;
  left: 50%;
  top: 48%;
  width: 12rem;
  height: 12rem;
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
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  opacity: 0.8;
`;

export const Dots = styled.span`
  position: absolute;
  width: 2.4px;
  height: 2.4px;
  background: rgba(255, 255, 255, 0.4);
  transform-origin: 94px;
  border-radius: 2px;

  &:nth-child(5n) {
    width: 3px;
    height: 3px;
    background: rgba(255, 255, 255, 0.7);
  }

  &:nth-child(15n) {
    width: 6px;
    height: 2px;
    background: rgba(255, 255, 255);
  }
`;

export const AllDots = styled.div`
  position: absolute;
  left: 21%;
  top: 44.3%;
  transform: translate(-50%, -50%) rotate(6.7deg);
`;

export const HourHand = styled.div`
  ${HAND_CSS};
  width: 6px;
  height: 60px;
  background: ${white};
`;

export const MinuteHand = styled.div`
  ${HAND_CSS};
  width: 4px;
  height: 80px;
  background: ${black.m200};
`;

export const SecondHand = styled.div`
  ${HAND_CSS};
  width: 2px;
  height: 90px;
  background: ${red.m800};
`;

export const AlarmRing = styled.div`
  position: absolute;
  left: 16%;
  top: 14%;
`;

export const LeftActions = styled.div`
  position: absolute;
  bottom: 6%;
  left: 8%;
  display: flex;
  align-items: center;
  gap: 4px;

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
  border-radius: 0.4rem;
`;

export const ActionBtn = styled.button`
  position: relative;
  width: 100%;
  height: 100%;
  height: 2.4rem;
  width: 2.4rem;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.4);
  border: none;
  padding: 0;
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

export const Bullet = styled.div`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: ${white};
`;

export const BulletRing = styled.div`
  position: absolute;
  left: 26%;
  top: 24%;
  rotate: ${({ $angle }) => 45 + $angle}deg;
  height: 157.5px;
  width: 157.5px;
  transform-origin: center;
  transition: rotate 0.3s ease;
`;
