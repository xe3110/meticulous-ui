const InfoCircleOutline = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <circle cx='12' cy='12' r='10' stroke={color} strokeWidth='1.5' />
    <path d='M12 17V11' stroke={color} strokeWidth='1.5' strokeLinecap='round' />
    <circle cx='1' cy='1' r='1' transform='matrix(1 0 0 -1 11 9)' fill={color} />
  </svg>
);

export default InfoCircleOutline;
