import React from 'react';
import grey from '../../../colors/grey';

const MinusCircle = ({ color = grey.m500, size = 24, ...props }) => (
  <svg
    viewBox='0 0 32 32'
    width={size}
    height={size}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Minus Circle'
    {...props}
  >
    <g stroke={color} strokeWidth='1' fill={color} fillRule='evenodd'>
      <g transform='translate(-516 -1087)' fill={color}>
        <path d='M532 1117c-7.732 0-14-6.27-14-14s6.268-14 14-14 14 6.27 14 14-6.268 14-14 14m0-30c-8.837 0-16 7.16-16 16s7.163 16 16 16 16-7.16 16-16-7.163-16-16-16m6 15h-12a1.001 1.001 0 0 0 0 2h12a1.001 1.001 0 0 0 0-2' />
      </g>
    </g>
  </svg>
);

export default MinusCircle;
