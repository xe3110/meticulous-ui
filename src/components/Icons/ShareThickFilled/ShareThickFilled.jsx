import grey from '../../../colors/grey';

const ShareThickFilled = ({ color = grey.m500, size = 24, ...props }) => (
  <svg
    viewBox='0 0 16 16'
    width={size}
    height={size}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Share Thick Filled'
    {...props}
  >
    <path
      d='M11 6a3 3 0 1 0-2.93-2.349L4.87 5.653a3 3 0 1 0 0 4.694L8.07 12.35a3 3 0 1 0 1.06-1.696L5.93 8.65a3 3 0 0 0 0-1.302l3.202-2.002A3 3 0 0 0 11 6'
      fill={color}
    />
  </svg>
);

export default ShareThickFilled;
