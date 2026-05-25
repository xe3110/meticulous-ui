import { useState } from 'react';
import Shimmer from '../Shimmer';
import styled from 'styled-components';

const ImageWrapper = styled.span`
  position: relative;
  display: ${({ $isAutoHeight }) => ($isAutoHeight ? 'block' : 'inline-block')};
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  /* aspect-ratio reserves space for shimmer before image bytes arrive */
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio || 'unset'};
  /* minHeight ensures shimmer is visible even without an aspectRatio hint */
  min-height: ${({ $minHeight, $isAutoHeight, $aspectRatio }) =>
    $isAutoHeight && !$aspectRatio ? $minHeight : 'unset'};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  overflow: hidden;
`;

const StyledImage = styled.img`
  display: block;
  width: 100%;
  /* height: 100% breaks in auto-height parents — use auto instead */
  height: ${({ $isAutoHeight }) => ($isAutoHeight ? 'auto' : '100%')};
  /* object-fit: cover requires both dimensions to be set */
  object-fit: ${({ $isAutoHeight }) => ($isAutoHeight ? 'initial' : 'cover')};
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
  aspectRatio,
  minHeight = '12rem',
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
  const isAutoHeight = height === 'auto';

  return (
    <ImageWrapper
      $width={toRem(width)}
      $height={toRem(height)}
      $aspectRatio={aspectRatio}
      $minHeight={toRem(minHeight)}
      $isAutoHeight={isAutoHeight}
      $borderRadius={toRem(borderRadius)}
    >
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
          $isAutoHeight={isAutoHeight}
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
