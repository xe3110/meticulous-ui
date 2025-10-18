import grey from '../../../colors/grey';

const ExitArrowOutOutline = ({ color = grey.m500, size = 24, ...props }) => (
  <svg
    viewBox='0 0 24 24'
    width={size}
    height={size}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Exit Arrow Out Outline'
    {...props}
  >
    <path
      d='M14 7.636V4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-3.136M10 12h11m0 0-3-3.5m3 3.5-3 3.5'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default ExitArrowOutOutline;
