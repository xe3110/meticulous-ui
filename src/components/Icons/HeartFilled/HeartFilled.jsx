import grey from '../../../colors/grey';

const HeartFilled = ({ color = grey.m500, size = 24, ...props }) => (
  <svg
    viewBox='0 0 16 16'
    width={size}
    height={size}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Heart Filled'
    {...props}
  >
    <path
      d='M1.243 8.243 8 15l6.757-6.757a4.24 4.24 0 0 0 1.243-3v-.19A4.052 4.052 0 0 0 8.783 2.52L8 3.5l-.783-.98A4.052 4.052 0 0 0 0 5.053v.19c0 1.126.447 2.205 1.243 3'
      fill={color}
    />
  </svg>
);

export default HeartFilled;
