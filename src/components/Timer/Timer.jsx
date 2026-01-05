import { useEffect, useState } from 'react';
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

  const setTimer = () => {
    setTimerSec(timerSeconds);
    setPaused(false);
    onTimerAdd();
  };

  const removeTimer = () => {
    setTimerSec(0);
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
      setTime(new Date());
      !isPaused &&
        setTimerSec((timerSec) => {
          if (timerSec - 1 === 0) {
            onTimerComplete();
          }

          return timerSec - 1;
        });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const date = time.toLocaleString('en-Us', { hour12: true, timeZone });
  const currentTime = date.split(', ')[1];
  const currentTimeWithoutAmPm = currentTime.split(' ')[0];
  const amPm = currentTime.split(' ')[1];
  const withoutSec = currentTime.split(':').slice(0, 2).join(':');
  const currTimeArr = currentTimeWithoutAmPm.split(':');
  const hasNoTimer = !(Number.isInteger(timerSec) && timerSec > 0);

  return (
    <Wrapper $color={color}>
      <Glass borderRadius='1.2rem' />
      {showTime && (
        <>
          <Dimmer />
          {isDigital ? (
            <Time>
              <TimeTxt>{showTimeWithSec ? currentTimeWithoutAmPm : withoutSec}</TimeTxt>
              <TimeTxt>{amPm}</TimeTxt>
            </Time>
          ) : (
            <Time>
              <HourHand style={{ rotate: `${currTimeArr[0] * 30 + currTimeArr[1] * 0.5}deg` }} />
              <MinuteHand style={{ rotate: `${currTimeArr[1] * 6}deg` }} />
              <SecondHand style={{ rotate: `${currTimeArr[2] * 6}deg` }} />
            </Time>
          )}
        </>
      )}
      <AllDots>
        {[...Array(60)].map((_, i) => (
          <Dots key={i} style={{ rotate: `${i * 6}deg` }} />
        ))}
      </AllDots>
      {!hasNoTimer && (
        <>
          <AlarmRing>
            <TimerRing progress={timerSec >= 60 ? 1 : (timerSec % 60) / 60} />
          </AlarmRing>
          <BulletRing $angle={(timerSec % 60) * 6}>
            <Bullet />
          </BulletRing>
        </>
      )}
      <LeftActions $noActions={hasNoTimer}>
        <ActionBtn onClick={removeTimer}>
          <MediaStopFilledWrapper color={white} size={14} />
        </ActionBtn>
        {hasNoTimer || !isPaused ? (
          <ActionBtn onClick={pauseTimer}>
            <MediaPauseFilledWrapper color={white} size={14} />
          </ActionBtn>
        ) : (
          <ActionBtn onClick={playTimer}>
            <MediaPlayFilledWrapper color={white} size={14} />
          </ActionBtn>
        )}
      </LeftActions>
      <RightActions>
        <ActionBtn title='Add timer in seconds' onClick={setTimer}>
          <AddWrapper color={white} size={20} />
        </ActionBtn>
      </RightActions>
    </Wrapper>
  );
};

export default Timer;
