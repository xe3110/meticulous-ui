const SortTopToBottom = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M4 16L13 16' stroke={color} strokeWidth='1.5' strokeLinecap='round' />
    <path d='M6 11H13' stroke={color} strokeWidth='1.5' strokeLinecap='round' />
    <path d='M8 6L13 6' stroke={color} strokeWidth='1.5' strokeLinecap='round' />
    <path
      d='M17 4L17 20L20 16'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default SortTopToBottom;
