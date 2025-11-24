const CommentFilled = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 32 32'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <title>comment 1</title>
    <desc>Created with Sketch Beta.</desc>
    <defs></defs>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' sketch:type='MSPage'>
      <g sketch:type='MSLayerGroup' transform='translate(-102.000000, -257.000000)' fill={color}>
        <path
          d='M118,257 C109.164,257 102,263.269 102,271 C102,275.419 104.345,279.354 108,281.919 L108,289 L115.009,284.747 C115.979,284.907 116.977,285 118,285 C126.836,285 134,278.732 134,271 C134,263.269 126.836,257 118,257'
          sketch:type='MSShapeGroup'
        ></path>
      </g>
    </g>
  </svg>
);

export default CommentFilled;
