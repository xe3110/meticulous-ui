import { useRef } from 'react';
import { VideoContainer, Video } from './styles';
import { useSpacebarToggle } from './useSpacebarToggle';

const VideoPlayer = ({ link }) => {
  const videoRef = useRef(null);

  useSpacebarToggle(videoRef);

  return (
    <VideoContainer>
      <Video ref={videoRef} src={link} controls width='600'>
        Your browser does not support the video tag.
      </Video>
    </VideoContainer>
  );
};

export default VideoPlayer;
