const ClockCircleOutlineIcon = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <circle cx='12' cy='12' r='10' stroke={color} stroke-width='1.5' />
    <path
      d='M12 8V12L14.5 14.5'
      stroke={color}
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </svg>
);

export default ClockCircleOutlineIcon;
