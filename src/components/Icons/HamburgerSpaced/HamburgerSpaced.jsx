import grey from '../../../colors/grey';

const HamburgerSpaced = ({ color = grey.m500, size = 24, ...props }) => (
  <svg
    viewBox='0 -1 20 20'
    width={size}
    height={size}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Hamburger Spaced'
    {...props}
  >
    <g stroke={color} strokeWidth='1' fill={color} fillRule='evenodd'>
      <g transform='translate(-210 -887)' fill={color}>
        <path d='M229 895h-18a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2m0 8h-18a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2m-18-14h18a1 1 0 1 0 0-2h-18a1 1 0 0 0 0 2' />
      </g>
    </g>
  </svg>
);

export default HamburgerSpaced;
