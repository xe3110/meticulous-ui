import grey from '../../../colors/grey';

const DotsHorizontalFilled = ({ color = grey.m500, size = 24, ...props }) => (
  <svg
    viewBox='0 0 16 16'
    width={size}
    height={size}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Dots Horizontal Filled'
    {...props}
  >
    <path
      d='M4 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0M14 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4'
      fill={color}
    />
  </svg>
);

export default DotsHorizontalFilled;
