import grey from '../../../colors/grey';

const Add = ({ color = grey.m500, size = 24, ...props }) => (
  <svg
    viewBox='0 0 24 24'
    width={size}
    height={size}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Add'
    {...props}
  >
    <g>
      <g dataName='add'>
        <g>
          <line
            fill={color}
            stroke={color}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            x1='12'
            x2='12'
            y1='19'
            y2='5'
          />
          <line
            fill={color}
            stroke={color}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
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

export default Add;
