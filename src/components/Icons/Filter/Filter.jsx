const Filter = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M0 3H16V1H0V3Z' fill={color} />
    <path d='M2 7H14V5H2V7Z' fill={color} />
    <path d='M4 11H12V9H4V11Z' fill={color} />
    <path d='M10 15H6V13H10V15Z' fill={color} />
  </svg>
);

export default Filter;
