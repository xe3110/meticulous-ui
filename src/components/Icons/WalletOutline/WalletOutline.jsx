import grey from '../../../colors/grey';

const WalletOutline = ({ color = grey.m500, size = 24, ...props }) => (
  <svg
    viewBox='-1.5 0 33 33'
    width={size}
    height={size}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Wallet Outline'
    {...props}
  >
    <g stroke={color} strokeWidth='1' fill={color} fillRule='evenodd'>
      <g transform='translate(-257 -774)' fill={color}>
        <path d='M285 793h-5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5v5a1 1 0 0 1-1 1h-24a1 1 0 0 1-1-1v-19h25a1 1 0 0 1 1 1zm0 3v1h-4v-2h4zm-2-19v6h-19.5zm2 6v-7c0-.553-.236-.859-.75-1.062-.396-.157-.781-.063-1.25.062l-26 8v22a2 2 0 0 0 2 2h26a2 2 0 0 0 2-2v-20a2 2 0 0 0-2-2' />
      </g>
    </g>
  </svg>
);

export default WalletOutline;
