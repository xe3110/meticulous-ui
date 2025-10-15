import grey from '../../../colors/grey';

const CommentLineFilled = ({ color = grey.m500, size = 24, ...props }) => (
  <svg
    viewBox='0 0 32 32'
    width={size}
    height={size}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Comment Line Filled'
    {...props}
  >
    <g stroke={color} strokeWidth='1' fill={color} fillRule='evenodd'>
      <g transform='translate(-154 -257)' fill={color}>
        <path d='M177 270h-14a1 1 0 1 1 0-2h14a1 1 0 0 1 0 2m-2 6h-10a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2m-5-19c-8.836 0-16 6.269-16 14 0 4.419 2.345 8.354 6 10.919V289l7.009-4.253c.97.16 1.968.253 2.991.253 8.836 0 16-6.268 16-14 0-7.731-7.164-14-16-14' />
      </g>
    </g>
  </svg>
);

export default CommentLineFilled;
