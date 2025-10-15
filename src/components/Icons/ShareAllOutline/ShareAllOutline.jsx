import React from 'react';
import grey from '../../../colors/grey';

const ShareAllOutline = ({ color = grey.m500, size = 24, ...props }) => (
  <svg
    viewBox='0 0 24 24'
    width={size}
    height={size}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Share All Outline'
    {...props}
  >
    <path d='M9 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z' stroke={color} strokeWidth='1.5' />
    <path d='M14 6.5 9 10M14 17.5 9 14' stroke={color} strokeWidth='1.5' strokeLinecap='round' />
    <path
      d='M19 18.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM19 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z'
      stroke={color}
      strokeWidth='1.5'
    />
  </svg>
);

export default ShareAllOutline;
