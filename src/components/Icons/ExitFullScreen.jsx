const ExitFullScreen = ({ size = 24, color = 'currentColor', ...props }) => (
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
      d='M876.612 1043.388v710.171H761.27v-513.28L81.663 1920 0 1838.337l679.72-679.606H166.442v-115.343h710.171ZM1838.394 0l81.548 81.548-679.605 679.72h513.28v115.344h-710.172V166.441h115.344v513.164L1838.394 0Z'
      fillRule='evenodd'
    />
  </svg>
);

export default ExitFullScreen;
