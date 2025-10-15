import React from 'react';
import grey from '../../../colors/grey';

const ArrowRight = ({ color = grey.m500, size = 24, ...props }) => (
  <svg
    viewBox='0 0 24 24'
    width={size}
    height={size}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Arrow Right'
    {...props}
  >
    <path
      d='M5 12h14m0 0-6-6m6 6-6 6'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default ArrowRight;
