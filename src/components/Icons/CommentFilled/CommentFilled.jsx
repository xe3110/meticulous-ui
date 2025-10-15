import grey from '../../../colors/grey';

const CommentFilled = ({ color = grey.m500, size = 24, ...props }) => (
  <svg
    viewBox='0 0 32 32'
    width={size}
    height={size}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Comment Filled'
    {...props}
  >
    <g stroke={color} strokeWidth='1' fill={color} fillRule='evenodd'>
      <g transform='translate(-102 -257)' fill={color}>
        <path d='M118 257c-8.836 0-16 6.269-16 14 0 4.419 2.345 8.354 6 10.919V289l7.009-4.253c.97.16 1.968.253 2.991.253 8.836 0 16-6.268 16-14 0-7.731-7.164-14-16-14' />
      </g>
    </g>
  </svg>
);

export default CommentFilled;
