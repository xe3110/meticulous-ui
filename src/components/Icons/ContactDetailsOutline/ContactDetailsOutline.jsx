import grey from '../../../colors/grey';

const ContactDetailsOutline = ({ color = grey.m500, size = 24, ...props }) => (
  <svg
    viewBox='0 0 512 512'
    width={size}
    height={size}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Contact Details Outline'
    {...props}
  >
    <g stroke={color} strokeWidth='1' fill={color} fillRule='evenodd'>
      <g fill={color} transform='translate(42.667 85.333)'>
        <path d='M426.667 0v341.333H0V0zM384 42.667H42.667v256H384zm-42.667 170.666v32H234.667v-32zm-194.666-57.6c30.826 0 56 25.6 56 57.6h-128c0-32 25.072-57.6 56-57.6zm194.666-6.4v32H234.667v-32zM138.667 78.626c15.464 0 28 12.536 28 28s-12.536 28-28 28-28-12.536-28-28 12.536-28 28-28m202.666 6.707v32H234.667v-32z' />
      </g>
    </g>
  </svg>
);

export default ContactDetailsOutline;
