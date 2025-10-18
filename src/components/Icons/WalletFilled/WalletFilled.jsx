import grey from '../../../colors/grey';

const WalletFilled = ({ color = grey.m500, size = 24, ...props }) => (
  <svg
    viewBox='-1.5 0 33 33'
    width={size}
    height={size}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Wallet Filled'
    {...props}
  >
    <g stroke={color} strokeWidth='1' fill={color} fillRule='evenodd'>
      <g transform='translate(-259 -776)' fill={color}>
        <path d='M283 799h6v-2h-6zm4-12h-28v20a2 2 0 0 0 2 2h26a2 2 0 0 0 2-2v-6h-7a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h7v-6a2 2 0 0 0-2-2m0-9c0-.553-.236-.859-.75-1.062-.396-.157-.781-.063-1.25.062l-26 8h28z' />
      </g>
    </g>
  </svg>
);

export default WalletFilled;
