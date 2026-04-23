import styled from 'styled-components';

export const ImageWrapper = styled.span`
  position: relative;
  display: inline-block;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  overflow: hidden;
`;

export const StyledImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ $borderRadius }) => $borderRadius};
  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

export const ShimmerOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  opacity: ${({ $loaded }) => ($loaded ? 0 : 1)};
  transition: opacity 0.35s ease-out;
  pointer-events: none;
`;

export const LowResImage = styled.img`
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
