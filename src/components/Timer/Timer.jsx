import { useEffect, useRef, useState } from 'react';
import _noop from 'lodash-es/noop';

import Glass from '../Glass';
import TimerRing from './components/TimerRing/TimerRing';

import white from '../../colors/white';

import {
  Wrapper,
  Dimmer,
  Time,
  TimeTxt,
  Dots,
  AllDots,
  HourHand,
  MinuteHand,
  SecondHand,
  AlarmRing,
  RightActions,
  Bullet,
  BulletRing,
  AddWrapper,
  ActionBtn,
  LeftActions,
  MediaPauseFilledWrapper,
  MediaStopFilledWrapper,
  MediaPlayFilledWrapper,
} from './styles';

const getHandRotations = (timeZone) => () => {
  const now = new Date();
  const timeStr = now.toLocaleString('en-Us', { hour12: true, timeZone });
  const timePart = timeStr.split(', ')[1].split(' ')[0];
  const [h, m, s] = timePart.split(':').map(Number);
  return {
    second: s * 6,
    minute: m * 6 + s * 0.1,
    hour: h * 30 + m * 0.5,
  };
};

const Timer = ({
  color = 'green',
  showTime = true,
  showTimeWithSec = true,
  timeZone = 'Asia/Kolkata',
  isDigital = true,
  timerSeconds = 0,
  onTimerAdd = _noop,
  onTimerComplete = _noop,
  onTimerRemove = _noop,
  onTimerPause = _noop,
  onTimerPlay = _noop,
}) => {
  const [time, setTime] = useState(new Date());
  const [timerSec, setTimerSec] = useState(0);
  const [isPaused, setPaused] = useState(false);
  const [handRotations, setHandRotations] = useState(getHandRotations(timeZone));
  const [bulletAngle, setBulletAngle] = useState(0);
  const isPausedRef = useRef(isPaused);

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
    setTimerSec(0);
    setBulletAngle(0);
    onTimerRemove();
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
        const rawHour = h * 30 + m * 0.5;
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
    <Wrapper $color={color} role='region' aria-label='Clock'>
      <Glass borderRadius='1.2rem' aria-hidden='true' />
      {showTime && (
        <>
          <Dimmer aria-hidden='true' />
          {isDigital ? (
            <Time as='time' dateTime={time.toISOString()} aria-label={timeLabel}>
              <TimeTxt aria-hidden='true'>
                {showTimeWithSec ? currentTimeWithoutAmPm : withoutSec}
              </TimeTxt>
              <TimeTxt aria-hidden='true'>{amPm}</TimeTxt>
            </Time>
          ) : (
            <Time as='time' dateTime={time.toISOString()} aria-label={timeLabel}>
              <HourHand $rotate={handRotations.hour} aria-hidden='true' />
              <MinuteHand $rotate={handRotations.minute} aria-hidden='true' />
              <SecondHand $rotate={handRotations.second} aria-hidden='true' />
            </Time>
          )}
        </>
      )}
      <AllDots aria-hidden='true'>
        {[...Array(60)].map((_, i) => (
          <Dots key={i} style={{ rotate: `${i * 6}deg` }} />
        ))}
      </AllDots>
      {!hasNoTimer && (
        <>
          <AlarmRing aria-hidden='true'>
            <TimerRing progress={timerSec >= 60 ? 1 : (timerSec % 60) / 60} />
          </AlarmRing>
          <BulletRing $angle={bulletAngle} aria-hidden='true'>
            <Bullet />
          </BulletRing>
          <span
            role='timer'
            aria-live='polite'
            aria-label={`${timerSec} seconds remaining`}
            style={{
              position: 'absolute',
              width: 1,
              height: 1,
              overflow: 'hidden',
              clip: 'rect(0 0 0 0)',
              whiteSpace: 'nowrap',
            }}
          />
        </>
      )}
      <LeftActions $noActions={hasNoTimer}>
        <ActionBtn onClick={removeTimer} aria-label='Stop timer'>
          <MediaStopFilledWrapper color={white} size={14} aria-hidden='true' />
        </ActionBtn>
        {hasNoTimer || !isPaused ? (
          <ActionBtn onClick={pauseTimer} aria-label='Pause timer'>
            <MediaPauseFilledWrapper color={white} size={14} aria-hidden='true' />
          </ActionBtn>
        ) : (
          <ActionBtn onClick={playTimer} aria-label='Resume timer'>
            <MediaPlayFilledWrapper color={white} size={14} aria-hidden='true' />
          </ActionBtn>
        )}
      </LeftActions>
      <RightActions>
        <ActionBtn onClick={setTimer} aria-label={`Start ${timerSeconds} second timer`}>
          <AddWrapper color={white} size={20} aria-hidden='true' />
        </ActionBtn>
      </RightActions>
    </Wrapper>
  );
};

export default Timer;
