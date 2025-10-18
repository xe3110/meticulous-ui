import grey from '../../../colors/grey';

const LockClosedFilled = ({ color = grey.m500, size = 24, ...props }) => (
  <svg
    viewBox='0 0 16 16'
    width={size}
    height={size}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Lock Closed Filled'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4 6V4a4 4 0 1 1 8 0v2h2v10H2V6zm2-2a2 2 0 1 1 4 0v2H6zm1 9V9h2v4z'
      fill={color}
    />
  </svg>
);

export default LockClosedFilled;
