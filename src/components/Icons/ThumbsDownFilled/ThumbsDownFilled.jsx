import grey from '../../../colors/grey';

const ThumbsDownFilled = ({ color = grey.m500, size = 24, ...props }) => (
  <svg
    viewBox='0 0 24 24'
    width={size}
    height={size}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Thumbs Down Filled'
    {...props}
  >
    <path
      d='M20 5.61v5.77c0 .89-.73 1.62-1.62 1.62h-1.61V4h1.61c.9 0 1.62.72 1.62 1.61M5.34 5.24l-1.32 7.5c-.16.92.54 1.76 1.48 1.76h4.78V18c0 1.1.9 2 1.99 2h.09c.4 0 .76-.24.92-.61L16.01 13V4h-9.2c-.73 0-1.35.52-1.48 1.24z'
      fill={color}
    />
  </svg>
);

export default ThumbsDownFilled;
