import { useRef } from 'react';
import { VideoContainer, Video } from './styles';
import { useSpacebarToggle } from './useSpacebarToggle';
import VolumeBar from './components/Volumebar/Volumebar';
import { useVolumeOverlay } from './useVolumeOverlay';

const VideoPlayer = ({ link, thumbnail, width = '600', borderRadius = 8, height = 'auto' }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const { volume, showVolume } = useVolumeOverlay();

  const onVideoClick = () => {
    videoRef.current?.focus();
  };

  const onVideoKeyDown = (e) => {
    if (e.code === 'Space') {
      e.preventDefault();
    }
  };

  useSpacebarToggle(videoRef, containerRef, showVolume);

  return (
    <VideoContainer ref={containerRef} $width={width} $height={height}>
      <Video
        $borderRadius={borderRadius}
        ref={videoRef}
        src={link}
        poster={thumbnail}
        controls
        tabIndex={0}
        onClick={onVideoClick}
        onKeyDown={onVideoKeyDown}
      >
        Your browser does not support the video tag.
      </Video>
      <VolumeBar volume={volume} />
    </VideoContainer>
  );
};

export default VideoPlayer;
