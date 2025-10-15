import grey from '../../../colors/grey';

const ShareBoxOutline = ({ color = grey.m500, size = 24, ...props }) => (
  <svg
    viewBox='0 -0.5 25 25'
    width={size}
    height={size}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Share Box Outline'
    {...props}
  >
    <path
      d='M12.5 6.25a.75.75 0 0 0 0-1.5zm7.75 6.25a.75.75 0 0 0-1.5 0zm-.75-6.25a.75.75 0 0 0 0-1.5zm-4.088-1.5a.75.75 0 0 0 0 1.5zm4.838.75a.75.75 0 0 0-1.5 0zm-1.5 4.141a.75.75 0 0 0 1.5 0zm1.28-3.61a.75.75 0 0 0-1.06-1.061zm-8.06 5.939a.75.75 0 1 0 1.06 1.06zm.53-7.22h-3v1.5h3zm-3 0A4.75 4.75 0 0 0 4.75 9.5h1.5A3.25 3.25 0 0 1 9.5 6.25zM4.75 9.5v6h1.5v-6zm0 6a4.75 4.75 0 0 0 4.75 4.75v-1.5a3.25 3.25 0 0 1-3.25-3.25zm4.75 4.75h6v-1.5h-6zm6 0a4.75 4.75 0 0 0 4.75-4.75h-1.5a3.25 3.25 0 0 1-3.25 3.25zm4.75-4.75v-3h-1.5v3zM19.5 4.75h-4.088v1.5H19.5zm-.75.75v4.141h1.5V5.5zm.22-.53-7 7 1.06 1.06 7-7z'
      fill={color}
    />
  </svg>
);

export default ShareBoxOutline;
