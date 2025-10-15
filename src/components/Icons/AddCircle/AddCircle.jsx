import React from 'react';
import grey from '../../../colors/grey';

const AddCircle = ({ color = grey.m500, size = 24, ...props }) => (
  <svg
    viewBox='0 0 24 24'
    width={size}
    height={size}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Add Circle'
    {...props}
  >
    <path
      d='M11 8a1 1 0 1 1 2 0v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H8a1 1 0 1 1 0-2h3z'
      fill={color}
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11M3.007 12a8.993 8.993 0 1 0 17.986 0 8.993 8.993 0 0 0-17.986 0'
      fill={color}
    />
  </svg>
);

export default AddCircle;
