const BookmarkFilled = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox='-4 0 30 30'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <title>bookmark</title>
    <desc>Created with Sketch Beta.</desc>
    <defs></defs>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' sketch:type='MSPage'>
      <g sketch:type='MSLayerGroup' transform='translate(-419.000000, -153.000000)' fill={color}>
        <path
          d='M437,153 L423,153 C420.791,153 419,154.791 419,157 L419,179 C419,181.209 420.791,183 423,183 L430,176 L437,183 C439.209,183 441,181.209 441,179 L441,157 C441,154.791 439.209,153 437,153'
          sketch:type='MSShapeGroup'
        ></path>
      </g>
    </g>
  </svg>
);

export default BookmarkFilled;
