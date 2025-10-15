import grey from '../../../colors/grey';

const DotsVerticalFilled = ({ color = grey.m500, size = 24, ...props }) => (
  <svg
    viewBox='0 0 16 16'
    width={size}
    height={size}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Dots Vertical Filled'
    {...props}
  >
    <path
      d='M8 12a2 2 0 1 1 0 4 2 2 0 0 1 0-4M8 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4M10 2a2 2 0 1 0-4 0 2 2 0 0 0 4 0'
      fill={color}
    />
  </svg>
);

export default DotsVerticalFilled;
