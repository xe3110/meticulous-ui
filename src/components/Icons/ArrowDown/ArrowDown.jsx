import React from 'react';
import grey from '../../../colors/grey';

const ArrowDown = ({ color = grey.m500, size = 24, ...props }) => (
  <svg
    viewBox='0 0 24 24'
    width={size}
    height={size}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Arrow Down'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 3a1 1 0 0 1 1 1v13.586l5.293-5.293a1 1 0 0 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 1 1 1.414-1.414L11 17.586V4a1 1 0 0 1 1-1'
      fill={color}
    />
  </svg>
);

export default ArrowDown;
