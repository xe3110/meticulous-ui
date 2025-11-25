const LocationArrowFilled = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M16 1L15 0L0 6V8L7 9L8 16H10L16 1Z' fill={color} />
  </svg>
);

export default LocationArrowFilled;
