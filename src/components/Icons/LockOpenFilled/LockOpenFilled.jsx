import grey from '../../../colors/grey';

const LockOpenFilled = ({ color = grey.m500, size = 24, ...props }) => (
  <svg
    viewBox='0 0 16 16'
    width={size}
    height={size}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Lock Open Filled'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M11.5 2A1.5 1.5 0 0 0 10 3.5V6h3v10H1V6h7V3.5a3.5 3.5 0 1 1 7 0V4h-2v-.5A1.5 1.5 0 0 0 11.5 2M9 10H5v2h4z'
      fill={color}
    />
  </svg>
);

export default LockOpenFilled;
