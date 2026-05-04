import { useEffect, useRef } from 'react';
import white from '../../../../colors/white';
import styled from 'styled-components';

const SVG = styled.svg``;

const RADIUS = 33;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const TimerRing = ({ progress }) => {
  const circleRef = useRef(null);

  const groupAngle = 2 * Math.PI * progress;
  const headX = 50 + RADIUS * Math.cos(groupAngle);
  const headY = 48 + RADIUS * Math.sin(groupAngle);

  useEffect(() => {
    const offset = CIRCUMFERENCE * (1 - progress);
    circleRef.current.style.strokeDashoffset = offset;
  }, [progress]);

  return (
    <SVG viewBox='0 0 100 100' width='100%' height='100%'>
      <defs>
        <filter id='ambient-glow' x='-40%' y='-40%' width='180%' height='180%'>
          <feGaussianBlur in='SourceGraphic' stdDeviation='3.5' result='blur' />
          <feComposite in='blur' in2='SourceGraphic' operator='over' />
        </filter>
        <filter id='arc-glow' x='-20%' y='-20%' width='140%' height='140%'>
          <feGaussianBlur in='SourceGraphic' stdDeviation='0.7' result='blur' />
          <feMerge>
            <feMergeNode in='blur' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
        <filter id='head-glow' x='-150%' y='-150%' width='400%' height='400%'>
          <feGaussianBlur in='SourceGraphic' stdDeviation='1.6' result='blur' />
          <feMerge>
            <feMergeNode in='blur' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
      </defs>
      <g transform='rotate(-90, 50, 48)'>
        {/* Ambient glow behind active arc — very faint soft bloom */}
        {progress > 0.005 && (
          <circle
            cx={50}
            cy={48}
            r={RADIUS}
            stroke='rgba(255,255,255,0.09)'
            strokeWidth={6}
            fill='none'
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
            filter='url(#ambient-glow)'
          />
        )}
        {/* Inner shadow for recessed depth */}
        <circle cx={50} cy={48} r={RADIUS} stroke='rgba(0,0,0,0.28)' strokeWidth={4} fill='none' />
        {/* Track ring */}
        <circle
          cx={50}
          cy={48}
          r={RADIUS}
          stroke='rgba(255,255,255,.14)'
          strokeWidth={1.4}
          fill='none'
        />
        {/* Progress arc */}
        <circle
          ref={circleRef}
          cx={50}
          cy={48}
          r={RADIUS}
          stroke={white}
          strokeWidth={2}
          fill='none'
          strokeLinecap='round'
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE}
          filter='url(#arc-glow)'
          style={{ transition: 'stroke-dashoffset 0.2s linear' }}
        />
        {/* Head dot — spring easing, soft halo */}
        {progress > 0.005 && (
          <circle
            cx={headX}
            cy={headY}
            r={1.8}
            fill={white}
            filter='url(#head-glow)'
            style={{
              transition:
                'cx 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), cy 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          />
        )}
      </g>
    </SVG>
  );
};

export default TimerRing;
