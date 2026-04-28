import { useEffect, useRef } from 'react';
import white from '../../../../colors/white';
import { SVG } from './styles';

const RADIUS = 33;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const TimerRing = ({ progress }) => {
  const circleRef = useRef(null);

  useEffect(() => {
    const offset = CIRCUMFERENCE * (1 - progress);
    circleRef.current.style.strokeDashoffset = offset;
  }, [progress]);

  return (
    <SVG viewBox='0 0 100 100' width='100%' height='100%'>
      <g transform='rotate(-90, 50, 48)'>
        <circle
          cx={50}
          cy={48}
          r={RADIUS}
          stroke='rgba(255,255,255,.2)'
          strokeWidth={1}
          fill='none'
        />
        <circle
          ref={circleRef}
          cx={50}
          cy={48}
          r={RADIUS}
          stroke={white}
          strokeWidth={1.33}
          fill='none'
          strokeLinecap='round'
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE}
          style={{ transition: 'stroke-dashoffset 0.2s linear' }}
        />
      </g>
    </SVG>
  );
};

export default TimerRing;
