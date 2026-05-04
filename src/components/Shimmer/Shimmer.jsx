import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import grey from '../../colors/grey';

const shimmerSweep = keyframes`
  from { transform: translateX(-100%); }
  to   { transform: translateX(100%); }
`;

const ShimmerWrapper = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${grey.m300};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};

  &:after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      rgba(245, 245, 245, 0) 30%,
      ${grey.m100} 50%,
      rgba(245, 245, 245, 0) 70%
    );
    animation: ${shimmerSweep} 1.8s infinite;
  }
`;

const toRem = (val) => {
  if (val === undefined || val === null) return undefined;
  return typeof val === 'number' ? `${val}rem` : val;
};

const Shimmer = ({
  width = '100%',
  height = '100%',
  borderRadius = '0.64rem',
  label = 'Loading...',
  ...rest
}) => {
  return (
    <ShimmerWrapper
      role='status'
      aria-label={label}
      $width={toRem(width)}
      $height={toRem(height)}
      $borderRadius={toRem(borderRadius)}
      {...rest}
    />
  );
};

Shimmer.propTypes = {
  /** Width of the shimmer block (rem string or number). Defaults to `'100%'` */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Height of the shimmer block (rem string or number). Defaults to `'100%'` */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Border-radius of the shimmer block. Defaults to `'0.64rem'` */
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Accessible label for screen readers. Defaults to `'Loading...'` */
  label: PropTypes.string,
};

export default Shimmer;
