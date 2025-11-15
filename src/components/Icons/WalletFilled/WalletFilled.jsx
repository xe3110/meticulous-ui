import React from 'react';

const WalletFilled = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox='-1.5 0 33 33'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <title>wallet</title>
    <desc>Created with Sketch Beta.</desc>
    <defs></defs>
    <g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'>
      <g sketch:type='MSLayerGroup' transform='translate(-259.000000, -776.000000)' fill={color}>
        <path
          d='M283,799 L289,799 L289,797 L283,797 L283,799 Z M287,787 L259,787 L259,807 C259,808.104 259.896,809 261,809 L287,809 C288.104,809 289,808.104 289,807 L289,801 L282,801 C281.448,801 281,800.553 281,800 L281,796 C281,795.448 281.448,795 282,795 L289,795 L289,789 C289,787.896 288.104,787 287,787 L287,787 Z M287,778 C287,777.447 286.764,777.141 286.25,776.938 C285.854,776.781 285.469,776.875 285,777 L259,785 L287,785 L287,778 L287,778 Z'
          sketch:type='MSShapeGroup'
        ></path>
      </g>
    </g>
  </svg>
);

export default WalletFilled;
