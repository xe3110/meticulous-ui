import React from 'react';
import grey from '../../../colors/grey';

const Search = ({ color = grey.m500, size = 24, ...props }) => (
  <svg
    viewBox='0 0 32 32'
    width={size}
    height={size}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Search'
    {...props}
  >
    <g stroke={color} strokeWidth='1' fill={color} fillRule='evenodd'>
      <g transform='translate(-256 -1139)' fill={color}>
        <path d='M269.46 1163.45c-6.29 0-11.389-5.01-11.389-11.2s5.099-11.21 11.389-11.21 11.39 5.02 11.39 11.21-5.1 11.2-11.39 11.2m18.228 5.8-8.259-8.13c2.162-2.35 3.491-5.45 3.491-8.87 0-7.32-6.026-13.25-13.46-13.25s-13.46 5.93-13.46 13.25c0 7.31 6.026 13.24 13.46 13.24a13.52 13.52 0 0 0 8.472-2.96l8.292 8.16c.405.4 1.06.4 1.464 0 .405-.39.405-1.04 0-1.44' />
      </g>
    </g>
  </svg>
);

export default Search;
