import { useEffect, useRef, useState } from 'react';

import Glass from '../Glass';
import TimerRing from './components/TimerRing/TimerRing';

import white from '../../colors/white';

import {
  Wrapper,
  Dimmer,
  DotsWrapper,
  Time,
  TimeTxt,
  Dots,
  AllDots,
  HourHand,
  MinuteHand,
  SecondHand,
  AlarmRing,
  RightActions,
  VisuallyHidden,
  Bullet,
  BulletRing,
  AddWrapper,
  ActionBtn,
  LeftActions,
  MediaPauseFilledWrapper,
  MediaStopFilledWrapper,
  MediaPlayFilledWrapper,
} from './styles';
import { getSize } from './helpers';

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
  size = 20,
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

  const timeLabel = `${showTimeWithSec ? currentTimeWithoutAmPm : withoutSec} ${amPm}`;

  return (
    <Wrapper $color={color} role='region' aria-label='Clock' {...{ $size }} {...rest}>
      <Glass borderRadius={`${getSize(16.67)({ $size })}rem`} aria-hidden='true' />
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
            style={{ '--bullet-rotate': `${45 + bulletAngle}deg` }}
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

export default Timer;
