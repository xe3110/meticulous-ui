import grey from '../../../colors/grey';

const DetailsOutline = ({ color = grey.m500, size = 24, ...props }) => (
  <svg
    viewBox='0 0 512 512'
    width={size}
    height={size}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Details Outline'
    {...props}
  >
    <g stroke={color} strokeWidth='1' fill={color} fillRule='evenodd'>
      <g fill={color} transform='translate(64 64)'>
        <path d='M384 64v320H64V64zm-42.667 42.667H106.667v234.666h234.666zM320 0v42.667l-277.334-.001V320H0V0zm-21.333 234.667v42.666H149.333v-42.666zm0-85.334V192H149.333v-42.667z' />
      </g>
    </g>
  </svg>
);

export default DetailsOutline;
