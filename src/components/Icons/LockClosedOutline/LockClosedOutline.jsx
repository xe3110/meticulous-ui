import grey from '../../../colors/grey';

const LockClosedOutline = ({ color = grey.m500, size = 24, ...props }) => (
  <svg
    viewBox='0 0 24 24'
    width={size}
    height={size}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Lock Closed Outline'
    {...props}
  >
    <rect fill={color} />
    <path
      d='M6 19v-8a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1Z'
      stroke={color}
      strokeLinejoin='round'
    />
    <circle cx='12' cy='15' r='2' stroke={color} strokeLinejoin='round' />
    <path d='M8 10V8a4 4 0 1 1 8 0v2z' stroke={color} strokeLinejoin='round' />
  </svg>
);

export default LockClosedOutline;
