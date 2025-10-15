import grey from '../../../colors/grey';

const HomeFilled = ({ color = grey.m500, size = 24, ...props }) => (
  <svg
    viewBox='0 0 16 16'
    width={size}
    height={size}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Home Filled'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M8 0 0 6v2h1v7h3v-5h3v5h8V8h1V6l-2-1.5V1h-3v1.25zm1 10h3v3H9z'
      fill={color}
    />
  </svg>
);

export default HomeFilled;
