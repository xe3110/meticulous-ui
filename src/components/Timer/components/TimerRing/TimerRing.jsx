import { useEffect, useRef } from 'react';
import white from '../../../../colors/white';
import { SVG } from './styles';

const TimerRing = ({ progress }) => {
  const circleRef = useRef(null);
  const radius = 105;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const offset = circumference * (1 - progress);
    circleRef.current.style.strokeDashoffset = offset;
  }, [progress]);

  return (
    <SVG width='220' height='220'>
      <circle
        cx='110'
        cy='110'
        r={radius}
        stroke='rgba(255,255,255,.2)'
        strokeWidth='4'
        fill='none'
      />
      <circle
        ref={circleRef}
        cx='110'
        cy='110'
        r={radius}
        stroke={white}
        strokeWidth='4'
        fill='none'
        strokeLinecap='round'
        strokeDasharray={circumference}
        strokeDashoffset={circumference}
        style={{ transition: 'stroke-dashoffset 0.2s linear' }}
      />
    </SVG>
  );
};

export default TimerRing;
