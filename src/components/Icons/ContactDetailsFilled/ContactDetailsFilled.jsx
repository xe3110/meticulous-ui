import grey from '../../../colors/grey';

const ContactDetailsFilled = ({ color = grey.m500, size = 24, ...props }) => (
  <svg
    viewBox='0 0 512 512'
    width={size}
    height={size}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Contact Details Filled'
    {...props}
  >
    <g stroke={color} strokeWidth='1' fill={color} fillRule='evenodd'>
      <g fill={color} transform='translate(42.667 85.333)'>
        <path d='M426.667 0v341.333H0V0zm-64 213.333h-128v32h128zm-237.334-57.6h-16c-30.928 0-56 25.6-56 57.6h128c0-32-25.173-57.6-56-57.6m237.334-6.4h-128v32h128zM117.333 78.626c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28m245.334 6.707h-128v32h128z' />
      </g>
    </g>
  </svg>
);

export default ContactDetailsFilled;
