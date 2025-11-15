import React from 'react';

const ChevronDown = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M6 9L12 15L18 9'
      stroke={color}
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </svg>
);

export default ChevronDown;
