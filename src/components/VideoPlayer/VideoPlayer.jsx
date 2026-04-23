import { useRef, useState } from 'react';
import { VideoContainer, Video, ShimmerOverlay } from './styles';
import { useSpacebarToggle } from './useSpacebarToggle';
import VolumeBar from './components/Volumebar/Volumebar';
import { useVolumeOverlay } from './useVolumeOverlay';
import Shimmer from '../Shimmer';

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
