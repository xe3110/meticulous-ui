import grey from '../../../colors/grey';

const LockOpenOutline = ({ color = grey.m500, size = 24, ...props }) => (
  <svg
    viewBox='0 0 24 24'
    width={size}
    height={size}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Lock Open Outline'
    {...props}
  >
    <rect fill={color} />
    <path
      d='M6 19v-8a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1Z'
      stroke={color}
      strokeLinejoin='round'
    />
    <circle cx='12' cy='15' r='2' stroke={color} strokeLinejoin='round' />
    <path
      d='M16 10V6.5A2.5 2.5 0 0 1 18.5 4v0A2.5 2.5 0 0 1 21 6.5V10'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default LockOpenOutline;
