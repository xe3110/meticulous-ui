const SortBottomToTop = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M4 8H13' stroke={color} strokeWidth='1.5' strokeLinecap='round' />
    <path d='M6 13H13' stroke={color} strokeWidth='1.5' strokeLinecap='round' />
    <path d='M8 18H13' stroke={color} strokeWidth='1.5' strokeLinecap='round' />
    <path
      d='M17 20V4L20 8'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default SortBottomToTop;
