import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import Glass from '../Glass';
import TimerRing from './components/TimerRing/TimerRing';

import white from '../../colors/white';
import black from '../../colors/black';
import red from '../../colors/red';
import ClockCircleOutline from '../Icons/ClockCircleOutline';
import Add from '../Icons/Add';
import MediaStopFilled from '../Icons/MediaStopFilled';
import MediaPauseFilled from '../Icons/MediaPauseFilled';
import MediaPlayFilled from '../Icons/MediaPlayFilled';

import { COLOR_MAPPING } from './constants';

const getSize =
  (ratio) =>
  ({ $size }) =>
    $size / ratio;
import styled, { css, keyframes } from 'styled-components';

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

const Wrapper = styled.div`
  position: relative;
  height: ${getSize(WRAPPER_RATIO)}rem;
  width: ${getSize(WRAPPER_RATIO)}rem;
  border-radius: ${getSize(WRAPPER_BR_RATIO)}rem;
  background-color: ${getColor};
`;

const Dimmer = styled.div`
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

const Time = styled.div`
  position: absolute;
  left: 50%;
  top: 48%;
  transform: translate(-50%, -50%);
`;

const TimeTxt = styled.div`
  color: ${white};
  font-size: ${getSize(13.33)}rem;
  font-weight: 650;
  text-align: center;
  opacity: 0.84;
`;

const Dots = styled.span`
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

const DotsWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const AllDots = styled.div`
  position: absolute;
  left: 1.6%;
  top: 43.8%;
  transform: translate(-50%, -50%) rotate(6.7deg);
`;

const HourHand = styled.div`
  ${HAND_CSS};
  width: ${getSize(50)}rem;
  height: ${getSize(5.33)}rem;
  background: ${white};
`;

const MinuteHand = styled.div`
  ${HAND_CSS};
  width: ${getSize(80)}rem;
  height: ${getSize(4)}rem;
  background: ${black.m200};
`;

const SecondHand = styled.div`
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

const TimerDigit = styled.span`
  display: inline-block;
  animation: ${digitSlideIn} 0.28s cubic-bezier(0.34, 1.56, 0.64, 1) both;
`;

const AlarmRing = styled.div`
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

const AlarmLabel = styled.div`
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

const LeftActions = styled.div`
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

const RightActions = styled.div`
  position: absolute;
  bottom: 6%;
  right: 8%;
  border-radius: ${getSize(50)}rem;
`;

const ActionBtn = styled.button`
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

const AddWrapper = styled(Add)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const MediaStopFilledWrapper = styled(MediaStopFilled)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const MediaPauseFilledWrapper = styled(MediaPauseFilled)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const MediaPlayFilledWrapper = styled(MediaPlayFilled)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
`;

const Bullet = styled.div`
  position: absolute;
  width: ${getSize(35)}rem;
  height: ${getSize(35)}rem;
  border-radius: 50%;
  background-color: ${white};
  left: calc(-${getSize(70)}rem);
  top: calc(-${getSize(100 / 33)}rem - ${getSize(70)}rem);
`;

const BulletRing = styled.div`
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

const noop = () => {};

const getHandRotations = (timeZone) => () => {
  const now = new Date();
  const timeStr = now.toLocaleString('en-Us', { hour12: true, timeZone });
  const timePart = timeStr.split(', ')[1].split(' ')[0];
  const [h, m, s] = timePart.split(':').map(Number);
  return {
    second: s * 6,
    minute: m * 6 + s * 0.1,
    hour: (h % 12) * 30 + m * 0.5,
  };
};

const Timer = ({
  color = 'green',
  showTime = true,
  showTimeWithSec = true,
  timeZone = 'Asia/Kolkata',
  isDigital = true,
  timerSeconds = 0,
  onTimerAdd = noop,
  onTimerComplete = noop,
  onTimerRemove = noop,
  onTimerPause = noop,
  onTimerPlay = noop,
  size = 30,
  ...rest
}) => {
  const [time, setTime] = useState(new Date());
  const [timerSec, setTimerSec] = useState(0);
  const [isPaused, setPaused] = useState(false);
  const [handRotations, setHandRotations] = useState(getHandRotations(timeZone));
  const [bulletAngle, setBulletAngle] = useState(0);
  const [isDismissing, setIsDismissing] = useState(false);
  const isPausedRef = useRef(isPaused);
  const $size = Math.round(size);
  const ICON_SIZE = Math.round((14 * size) / 20); // Base icon size is 14px at size=20, so scale accordingly

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  const setTimer = () => {
    setTimerSec(timerSeconds);
    setBulletAngle((timerSeconds % 60) * 6);
    setPaused(false);
    onTimerAdd();
  };

  const removeTimer = () => {
    setIsDismissing(true);
    onTimerRemove();
  };

  const handleDismissEnd = () => {
    setTimerSec(0);
    setBulletAngle(0);
    setIsDismissing(false);
  };

  const pauseTimer = () => {
    setPaused(true);
    onTimerPause();
  };

  const playTimer = () => {
    setPaused(false);
    onTimerPlay();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now);
      setHandRotations((prev) => {
        const timeStr = now.toLocaleString('en-Us', { hour12: true, timeZone });
        const timePart = timeStr.split(', ')[1].split(' ')[0];
        const [h, m, s] = timePart.split(':').map(Number);
        const rawSecond = s * 6;
        const rawMinute = m * 6 + s * 0.1;
        const rawHour = (h % 12) * 30 + m * 0.5;
        // Adjust for wrap: if raw value wrapped back below prev, add a full 360
        const adjust = (prevVal, raw) => {
          const prevMod = prevVal % 360;
          return prevVal - prevMod + raw + (raw < prevMod ? 360 : 0);
        };
        return {
          second: adjust(prev.second, rawSecond),
          minute: adjust(prev.minute, rawMinute),
          hour: adjust(prev.hour, rawHour),
        };
      });
      if (!isPausedRef.current) {
        setTimerSec((timerSec) => {
          if (timerSec - 1 === 0) {
            onTimerComplete();
            setIsDismissing(true);
          }
          return timerSec - 1;
        });
        setBulletAngle((prev) => prev - 6);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const date = time.toLocaleString('en-Us', { hour12: true, timeZone });
  const currentTime = date.split(', ')[1];
  const currentTimeWithoutAmPm = currentTime.split(' ')[0];
  const amPm = currentTime.split(' ')[1];
  const withoutSec = currentTime.split(':').slice(0, 2).join(':');
  const hasNoTimer = !(Number.isInteger(timerSec) && timerSec > 0);

  const timerMinutes = String(Math.floor(timerSec / 60)).padStart(2, '0');
  const timerSeconds_ = String(timerSec % 60).padStart(2, '0');
  const timerLabel = `${timerMinutes}:${timerSeconds_}`;

  const timeLabel = `${showTimeWithSec ? currentTimeWithoutAmPm : withoutSec} ${amPm}`;

  return (
    <Wrapper $color={color} role='region' aria-label='Clock' {...{ $size }} {...rest}>
      <Glass borderRadius={`${getSize(16.67)({ $size })}rem`} aria-hidden='true' />
      {(!hasNoTimer || isDismissing) && (
        <>
          <AlarmRing
            $dismissing={isDismissing}
            onAnimationEnd={handleDismissEnd}
            aria-hidden='true'
          >
            <TimerRing progress={timerSec >= 60 ? 1 : (timerSec % 60) / 60} />
          </AlarmRing>
          <BulletRing
            {...{ $size }}
            style={{ '--bullet-rotate': `${bulletAngle}deg` }}
            $dismissing={isDismissing}
            aria-hidden='true'
          >
            <Bullet {...{ $size }} />
          </BulletRing>
          <VisuallyHidden
            role='timer'
            aria-live='polite'
            aria-label={`${timerSec} seconds remaining`}
          />
        </>
      )}
      {showTime && (
        <>
          <Dimmer aria-hidden='true' {...{ $size }}>
            <DotsWrapper>
              <AllDots aria-hidden='true'>
                {[...Array(60)].map((_, i) => (
                  <Dots key={i} $i={i} {...{ $size }} />
                ))}
              </AllDots>
            </DotsWrapper>
          </Dimmer>
          {isDigital ? (
            <Time as='time' dateTime={time.toISOString()} aria-label={timeLabel}>
              <TimeTxt {...{ $size }} aria-hidden='true'>
                {showTimeWithSec ? currentTimeWithoutAmPm : withoutSec}
              </TimeTxt>
              <TimeTxt {...{ $size }} aria-hidden='true'>
                {amPm}
              </TimeTxt>
            </Time>
          ) : (
            <Time as='time' dateTime={time.toISOString()} aria-label={timeLabel}>
              <HourHand
                {...{ $size }}
                style={{ '--hand-rotate': `${handRotations.hour}deg` }}
                aria-hidden='true'
              />
              <MinuteHand
                {...{ $size }}
                style={{ '--hand-rotate': `${handRotations.minute}deg` }}
                aria-hidden='true'
              />
              <SecondHand
                {...{ $size }}
                style={{ '--hand-rotate': `${handRotations.second}deg` }}
                aria-hidden='true'
              />
            </Time>
          )}
        </>
      )}
      {timerSeconds > 0 && (
        <LeftActions
          {...{ $size }}
          $noActions={hasNoTimer}
          role='group'
          aria-label='Timer controls'
        >
          <ActionBtn
            type='button'
            onClick={removeTimer}
            {...{ $size }}
            aria-label='Stop timer'
            aria-disabled={hasNoTimer}
          >
            <MediaStopFilledWrapper color={white} size={ICON_SIZE} aria-hidden='true' />
          </ActionBtn>
          {hasNoTimer || !isPaused ? (
            <ActionBtn
              type='button'
              onClick={pauseTimer}
              {...{ $size }}
              aria-label='Pause timer'
              aria-disabled={hasNoTimer}
            >
              <MediaPauseFilledWrapper color={white} size={ICON_SIZE} aria-hidden='true' />
            </ActionBtn>
          ) : (
            <ActionBtn type='button' onClick={playTimer} aria-label='Resume timer' {...{ $size }}>
              <MediaPlayFilledWrapper color={white} size={ICON_SIZE} aria-hidden='true' />
            </ActionBtn>
          )}
        </LeftActions>
      )}
      {(!hasNoTimer || isDismissing) && (
        <AlarmLabel
          {...{ $size }}
          $dismissing={isDismissing}
          aria-label={`${timerSec} seconds remaining`}
        >
          <ClockCircleOutline
            color='rgba(255,255,255,0.82)'
            style={{ width: '1em', height: '1em', flexShrink: 0 }}
          />
          {timerLabel
            .split('')
            .map((char, i) =>
              char === ':' ? (
                <span key={i}>{char}</span>
              ) : (
                <TimerDigit key={`${i}-${char}`}>{char}</TimerDigit>
              )
            )}
        </AlarmLabel>
      )}
      {timerSeconds > 0 && (
        <RightActions role='group' {...{ $size }} aria-label='Start timer'>
          <ActionBtn
            type='button'
            onClick={setTimer}
            {...{ $size }}
            aria-label={`Start ${timerSeconds} second timer`}
          >
            <AddWrapper color={white} size={$size} aria-hidden='true' />
          </ActionBtn>
        </RightActions>
      )}
    </Wrapper>
  );
};

Timer.propTypes = {
  /** Color theme key for the clock and accent elements. Defaults to `'green'` */
  color: PropTypes.string,
  /** Diameter of the clock in pixels. Defaults to `30` */
  size: PropTypes.number,
  /** Whether to display the time readout. Defaults to `true` */
  showTime: PropTypes.bool,
  /** Includes seconds in the digital readout when true. Defaults to `true` */
  showTimeWithSec: PropTypes.bool,
  /** IANA timezone string (e.g. `'Asia/Kolkata'`). Defaults to `'Asia/Kolkata'` */
  timeZone: PropTypes.string,
  /** Shows a digital readout when true; analog hands when false. Defaults to `true` */
  isDigital: PropTypes.bool,
  /** Countdown duration in seconds. Shows timer controls when > 0 */
  timerSeconds: PropTypes.number,
  /** Called when the timer is started */
  onTimerAdd: PropTypes.func,
  /** Called when the countdown reaches zero */
  onTimerComplete: PropTypes.func,
  /** Called when the timer is stopped */
  onTimerRemove: PropTypes.func,
  /** Called when the timer is paused */
  onTimerPause: PropTypes.func,
  /** Called when a paused timer is resumed */
  onTimerPlay: PropTypes.func,
};

export default Timer;
