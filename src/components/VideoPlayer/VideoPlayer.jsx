import { useRef, useState } from 'react';
import { useSpacebarToggle } from './useSpacebarToggle';
import VolumeBar from './components/Volumebar/Volumebar';
import { useVolumeOverlay } from './useVolumeOverlay';
import Shimmer from '../Shimmer';
import styled from 'styled-components';
import black from '../../colors/black';

const ShimmerOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  border-radius: ${({ $borderRadius }) => $borderRadius}px;
  opacity: ${({ $loaded }) => ($loaded ? 0 : 1)};
  transition: opacity 0.35s ease-out;
  pointer-events: none;
`;

const VideoContainer = styled.div`
  position: relative;
  display: inline-block;
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;

  &:fullscreen video {
    width: 100vw;
    height: 100vh;
    object-fit: contain;
    background: ${black.m900};
  }
`;

const Video = styled.video`
  border-radius: ${({ $borderRadius }) => $borderRadius}px;
  width: 100%;
  height: 100%;
  max-width: ${({ width }) => width}px;
  aspect-ratio: 16 / 9;
  background-color: #000;
  object-fit: contain;

  &:fullscreen {
    width: 100vw;
    height: 100vh;
    object-fit: contain;
  }
`;

const VideoPlayer = ({
  link,
  thumbnail,
  width = '600',
  borderRadius = 8,
  height = 'auto',
  hasShimmer = true,
  ...rest
}) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const { volume, showVolume } = useVolumeOverlay();
  const [loaded, setLoaded] = useState(false);

  useSpacebarToggle(videoRef, containerRef, showVolume);

  return (
    <VideoContainer ref={containerRef} $width={width} $height={height} {...rest}>
      {hasShimmer && (
        <ShimmerOverlay $loaded={loaded} $borderRadius={borderRadius}>
          <Shimmer borderRadius={`${borderRadius}px`} />
        </ShimmerOverlay>
      )}
      <Video
        $borderRadius={borderRadius}
        ref={videoRef}
        src={link}
        poster={thumbnail}
        controls
        onLoadedData={() => setLoaded(true)}
      >
        Your browser does not support the video tag.
      </Video>
      <VolumeBar volume={volume} />
    </VideoContainer>
  );
};

export default VideoPlayer;
