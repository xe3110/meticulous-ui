import grey from '../../../colors/grey';

const BookmarkOutline = ({ color = grey.m500, size = 24, ...props }) => (
  <svg
    viewBox='0 0 24 24'
    width={size}
    height={size}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Bookmark Outline'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4 4a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v16.943c0 1.668-1.923 2.603-3.236 1.572L12 18.772l-4.764 3.743C5.923 23.546 4 22.611 4 20.942zm3-1a1 1 0 0 0-1 1v16.943l6-4.715 6 4.714V4a1 1 0 0 0-1-1z'
      fill={color}
    />
  </svg>
);

export default BookmarkOutline;
