import grey from '../../../colors/grey';

const ClockCircleOutline = ({ color = grey.m500, size = 24, ...props }) => (
  <svg
    viewBox='0 0 24 24'
    width={size}
    height={size}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Clock Circle Outline'
    {...props}
  >
    <circle cx='12' cy='12' r='10' stroke={color} strokeWidth='1.5' />
    <path
      d='M12 8v4l2.5 2.5'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default ClockCircleOutline;
