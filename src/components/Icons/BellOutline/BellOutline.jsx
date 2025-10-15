import grey from '../../../colors/grey';

const BellOutline = ({ color = grey.m500, size = 24, ...props }) => (
  <svg
    viewBox='0 0 24 24'
    width={size}
    height={size}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Bell Outline'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 3C8.444 3 6.667 5.507 6.667 8.6v1.733c0 1.105-.994 2.017-1.791 2.782A2.78 2.78 0 0 0 4 15.133C4 16.164 4.796 17 5.778 17h12.444c.982 0 1.778-.836 1.778-1.867 0-.826-.362-1.525-.876-2.018-.797-.765-1.79-1.677-1.79-2.782V8.6C17.333 5.507 15.555 3 12 3Z'
      stroke={color}
      strokeWidth='2'
    />
    <path
      d='M14 20a2.2 2.2 0 0 1-.846.73 2.6 2.6 0 0 1-1.154.267c-.405 0-.803-.093-1.154-.267A2.2 2.2 0 0 1 10 20'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default BellOutline;
