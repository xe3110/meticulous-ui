import { useRef } from 'react';
import { VideoContainer, Video } from './styles';
import { useSpacebarToggle } from './useSpacebarToggle';

const VideoPlayer = ({ link }) => {
  const videoRef = useRef(null);

  const onVideoClick = () => {
    videoRef.current?.blur();
  };

  useSpacebarToggle(videoRef);

  return (
    <VideoContainer>
      <Video ref={videoRef} src={link} controls width='600' tabIndex={0} onClick={onVideoClick}>
        Your browser does not support the video tag.
      </Video>
    </VideoContainer>
  );
};

export default VideoPlayer;
