import grey from '../../../colors/grey';

const CommentLineOutline = ({ color = grey.m500, size = 24, ...props }) => (
  <svg
    viewBox='0 0 32 32'
    width={size}
    height={size}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Comment Line Outline'
    {...props}
  >
    <g stroke={color} strokeWidth='1' fill={color} fillRule='evenodd'>
      <g transform='translate(-152 -255)' fill={color}>
        <path d='M168 281c-1.168 0-2.296-.136-3.38-.367l-4.708 2.83.063-4.639c-3.609-2.17-5.975-5.758-5.975-9.824 0-6.627 6.268-12 14-12s14 5.373 14 12c0 6.628-6.268 12-14 12m0-26c-8.836 0-16 6.269-16 14 0 4.419 2.345 8.354 6 10.919V287l7.009-4.253c.97.16 1.968.253 2.991.253 8.836 0 16-6.268 16-14 0-7.731-7.164-14-16-14m7 11h-14a1 1 0 0 0 0 2h14a1 1 0 1 0 0-2m-2 6h-10a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2' />
      </g>
    </g>
  </svg>
);

export default CommentLineOutline;
