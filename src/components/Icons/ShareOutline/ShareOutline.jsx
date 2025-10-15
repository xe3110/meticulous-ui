import grey from '../../../colors/grey';

const ShareOutline = ({ color = grey.m500, size = 24, ...props }) => (
  <svg
    viewBox='0 0 24 24'
    width={size}
    height={size}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Share Outline'
    {...props}
  >
    <path
      d='m12.664 5.479 3.973 3.53c1.568 1.395 2.353 2.092 2.353 2.99s-.785 1.596-2.353 2.99l-3.973 3.53c-.716.637-1.074.956-1.369.823S11 18.731 11 17.772v-2.344c-3.6 0-7.5 1.714-9 4.571 0-9.142 5.333-11.428 9-11.428V6.226c0-.958 0-1.437.295-1.57.295-.132.653.186 1.37.823'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='m15.539 4.5 5.216 4.844a3.897 3.897 0 0 1-.126 5.823l-5.09 4.333'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
    />
  </svg>
);

export default ShareOutline;
