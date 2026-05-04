import { useState } from 'react';
import Shimmer from '../Shimmer';
import styled from 'styled-components';

const ImageWrapper = styled.span`
  position: relative;
  display: inline-block;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  overflow: hidden;
`;

const StyledImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ $borderRadius }) => $borderRadius};
  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

const ShimmerOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  opacity: ${({ $loaded }) => ($loaded ? 0 : 1)};
  transition: opacity 0.35s ease-out;
  pointer-events: none;
`;

const LowResImage = styled.img`
  position: absolute;
  inset: 0;
  z-index: 1;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.05);
  filter: ${({ $loaded }) => ($loaded ? 'blur(0px)' : 'blur(12px)')};
  opacity: ${({ $lowLoaded, $loaded }) => ($lowLoaded && !$loaded ? 1 : 0)};
  transition:
    opacity 0.5s ease-in-out,
    filter 0.5s ease-in-out;
`;

const toRem = (val) => {
  if (val === undefined || val === null) return undefined;
  return typeof val === 'number' ? `${val}rem` : val;
};

const Image = ({
  src,
  alt = '',
  width = '100%',
  height = '100%',
  borderRadius = '0.4rem',
  loadLow = false,
  lowSrc,
  ...rest
}) => {
  const [lowLoaded, setLowLoaded] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const onLowLoad = () => setLowLoaded(true);
  const onLoad = () => setLoaded(true);
  const onError = () => setError(true);

  const shimmerDone = loadLow ? lowLoaded : loaded;

  return (
    <ImageWrapper $width={toRem(width)} $height={toRem(height)} $borderRadius={toRem(borderRadius)}>
      {!error && (
        <ShimmerOverlay $loaded={shimmerDone}>
          <Shimmer borderRadius={borderRadius} />
        </ShimmerOverlay>
      )}
      {loadLow && lowSrc && !error && (
        <LowResImage
          src={lowSrc}
          alt=''
          aria-hidden='true'
          $lowLoaded={lowLoaded}
          $loaded={loaded}
          $borderRadius={toRem(borderRadius)}
          onLoad={onLowLoad}
        />
      )}
      {!error && (
        <StyledImage
          src={src}
          alt={alt}
          aria-hidden={alt === '' ? 'true' : undefined}
          $loaded={loaded}
          $borderRadius={toRem(borderRadius)}
          onLoad={onLoad}
          onError={onError}
          {...rest}
        />
      )}
    </ImageWrapper>
  );
};

export default Image;
