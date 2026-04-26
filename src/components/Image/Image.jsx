import { useState } from 'react';
import Shimmer from '../Shimmer';
import { ImageWrapper, StyledImage, ShimmerOverlay, LowResImage } from './styles';

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
