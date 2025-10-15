import React from 'react';
import grey from '../../../colors/grey';

const MinusCircleFilled = ({ color = grey.m500, size = 24, ...props }) => (
  <svg
    viewBox='0 0 32 32'
    width={size}
    height={size}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Minus Circle Filled'
    {...props}
  >
    <g stroke={color} strokeWidth='1' fill={color} fillRule='evenodd'>
      <g transform='translate(-518 -1089)' fill={color}>
        <path d='M540 1106h-12a1.001 1.001 0 0 1 0-2h12a1.001 1.001 0 0 1 0 2m-6-17c-8.837 0-16 7.16-16 16s7.163 16 16 16 16-7.16 16-16-7.163-16-16-16' />
      </g>
    </g>
  </svg>
);

export default MinusCircleFilled;
