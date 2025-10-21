const AddIcon = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <title />

    <g id='Complete'>
      <g data-name='add' id='add-2'>
        <g>
          <line
            fill='none'
            stroke={color}
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            x1='12'
            x2='12'
            y1='19'
            y2='5'
          />

          <line
            fill='none'
            stroke={color}
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            x1='5'
            x2='19'
            y1='12'
            y2='12'
          />
        </g>
      </g>
    </g>
  </svg>
);

export default AddIcon;
