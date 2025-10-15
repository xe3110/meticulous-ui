import grey from '../../../colors/grey';

const BellOffOutline = ({ color = grey.m500, size = 24, ...props }) => (
  <svg
    viewBox='0 0 24 24'
    width={size}
    height={size}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Bell Off Outline'
    {...props}
  >
    <path
      d='M20 15.133c0-.826-.362-1.525-.876-2.018-.797-.765-1.79-1.677-1.79-2.782V8.6C17.333 5.507 15.555 3 12 3c-1.204 0-2.204.287-3 .788M6.746 7.5a7.5 7.5 0 0 0-.08 1.1v1.733c0 1.105-.993 2.017-1.79 2.782A2.78 2.78 0 0 0 4 15.133C4 16.164 4.796 17 5.778 17H16.5'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M14 20a2.2 2.2 0 0 1-.846.73 2.6 2.6 0 0 1-1.154.267c-.405 0-.803-.093-1.154-.267A2.2 2.2 0 0 1 10 20M3 3l18 18'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default BellOffOutline;
