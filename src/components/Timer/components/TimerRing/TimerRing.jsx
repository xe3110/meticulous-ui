import { useEffect, useRef } from 'react';
import white from '../../../../colors/white';
import { SVG } from './styles';

const TimerRing = ({ progress, size }) => {
  const circleRef = useRef(null);
  const radius = size * 5.25;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const offset = circumference * (1 - progress);
    circleRef.current.style.strokeDashoffset = offset;
  }, [progress]);

  return (
    <SVG width={size * 11} height={size * 11}>
      <circle
        cx='50%'
        cy='50%'
        r={radius}
        stroke='rgba(255,255,255,.2)'
        strokeWidth={size * 0.2}
        fill='none'
      />
      <circle
        ref={circleRef}
        cx='50%'
        cy='50%'
        r={radius}
        stroke={white}
        strokeWidth={size * 0.2}
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
