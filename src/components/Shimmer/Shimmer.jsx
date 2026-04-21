import './Shimmer.css';

const toRem = (val) => {
  if (val === undefined || val === null) return undefined;
  return typeof val === 'number' ? `${val}rem` : val;
};

const Shimmer = ({ width = '', height = '', label = 'Loading...' }) => {
  return (
    <div
      className='shimmer'
      role='status'
      aria-label={label}
      style={{
        width: toRem(width),
        height: toRem(height),
      }}
    />
  );
};

export default Shimmer;
