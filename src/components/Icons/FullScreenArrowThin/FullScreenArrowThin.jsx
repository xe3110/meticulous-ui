const FullScreenArrowThin = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 1920 1920'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fill={color}
      d='M1158.513-.012v123.68h550.5L123.68 1708.878V1158.5H0V1920h761.5v-123.68H211.121l1585.21-1585.21v550.5h123.68V-.011z'
      fillRule='evenodd'
    />
  </svg>
);

export default FullScreenArrowThin;
