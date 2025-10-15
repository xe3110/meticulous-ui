import grey from '../../../colors/grey';

const DotsHorizontalOutline = ({ color = grey.m500, size = 24, ...props }) => (
  <svg
    viewBox='0 0 24 24'
    width={size}
    height={size}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Dots Horizontal Outline'
    {...props}
  >
    <path
      d='M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0M21 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0M7 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default DotsHorizontalOutline;
