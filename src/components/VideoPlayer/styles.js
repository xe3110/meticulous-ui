import styled from 'styled-components';
import black from '../../colors/black';

export const VideoContainer = styled.div`
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

export const Video = styled.video`
  border-radius: ${({ $borderRadius }) => $borderRadius}px;
  outline: none;
  width: 100%;
  max-width: ${({ width }) => width}px;
  height: auto;
  aspect-ratio: 16 / 9;
  background-color: #000;
  object-fit: contain;

  &:fullscreen {
    width: 100vw;
    height: 100vh;
    object-fit: contain;
  }
`;
