import styled from 'styled-components';
import black from '../../colors/black';

export const VideoContainer = styled.div`
  position: relative;
  display: inline-block;

  &:fullscreen video {
    width: 100vw;
    height: 100vh;
    object-fit: contain;
    background: ${black.m900};
  }
`;

export const Video = styled.video`
  border-radius: 0.8rem;
`;
