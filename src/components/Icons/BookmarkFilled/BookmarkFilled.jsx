import grey from '../../../colors/grey';

const BookmarkFilled = ({ color = grey.m500, size = 24, ...props }) => (
  <svg
    viewBox='-4 0 30 30'
    width={size}
    height={size}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Bookmark Filled'
    {...props}
  >
    <g stroke={color} strokeWidth='1' fill={color} fillRule='evenodd'>
      <g transform='translate(-419 -153)' fill={color}>
        <path d='M437 153h-14a4 4 0 0 0-4 4v22a4 4 0 0 0 4 4l7-7 7 7a4 4 0 0 0 4-4v-22a4 4 0 0 0-4-4' />
      </g>
    </g>
  </svg>
);

export default BookmarkFilled;
