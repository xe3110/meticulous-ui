import { useEffect, useState } from 'react';

import Glass from '../Glass';
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
  AddBtn,
  Bullet,
  BulletRing,
} from './styles';
import TimerRing from './components/TimerRing/TimerRing';

const Timer = ({
  color = 'green',
  showTime = true,
  showTimeWithSec = true,
  timeZone = 'Asia/Kolkata',
  isDigital = true,
  timerSec,
}) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const date = time.toLocaleString('en-Us', { hour12: true, timeZone });
  const currentTime = date.split(', ')[1];
  const currentTimeWithoutAmPm = currentTime.split(' ')[0];
  const amPm = currentTime.split(' ')[1];
  const withoutSec = currentTime.split(':').slice(0, 2).join(':');
  const currTimeArr = currentTimeWithoutAmPm.split(':');

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
      {Number.isInteger(timerSec) && timerSec > 0 && (
        <>
          <AlarmRing>
            <TimerRing progress={timerSec >= 60 ? 1 : (timerSec % 60) / 60} />
          </AlarmRing>
          <BulletRing $angle={(timerSec % 60) * 6}>
            <Bullet />
          </BulletRing>
        </>
      )}
    </Wrapper>
  );
};

export default Timer;
