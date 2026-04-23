import { ShimmerWrapper } from './styles';

const toRem = (val) => {
  if (val === undefined || val === null) return undefined;
  return typeof val === 'number' ? `${val}rem` : val;
};

const Shimmer = ({ width = '100%', height = '100%', borderRadius = '0.4rem', label = 'Loading...', ...rest }) => {
  return (
    <ShimmerWrapper role='status' aria-label={label} $width={toRem(width)} $height={toRem(height)} $borderRadius={toRem(borderRadius)} {...rest} />
  );
};

export default Shimmer;
