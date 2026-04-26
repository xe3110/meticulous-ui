import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 12px;
  outline: none;
`;

export const SlideArea = styled.div`
  position: relative;
  width: 100%;
`;

export const SlideViewport = styled.div`
  overflow: hidden;
  width: 100%;
  outline: none;
  cursor: ${({ $draggable }) => ($draggable ? 'grab' : 'default')};

  &:active {
    cursor: ${({ $draggable }) => ($draggable ? 'grabbing' : 'default')};
  }
`;

export const SlideTrack = styled.div`
  display: flex;
  width: 100%;
  transform: translateX(${({ $translateX }) => $translateX}%);
  transition: transform 0.35s ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  & > * {
    flex: 0 0 ${({ $visibleSlides }) => 100 / $visibleSlides}%;
    min-width: 0;
    box-sizing: border-box;
  }
`;

export const NavButton = styled.button`
  position: absolute;
  top: ${({ $arrowTop }) => $arrowTop ?? '50%'};
  transform: translateY(-50%);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #e0e0e0;
  background: #fff;
  cursor: pointer;
  color: #333;
  transition:
    background 0.15s,
    opacity 0.3s;
  padding: 0;

  &:first-of-type {
    left: ${({ $overlay }) => ($overlay ? '12px' : '-16px')};
  }

  &:last-of-type {
    right: ${({ $overlay }) => ($overlay ? '12px' : '-16px')};
  }

  &:hover:not(:disabled) {
    background: #f5f5f5;
  }

  &:disabled {
    opacity: 0.3;
    cursor: default;
  }

  &:focus-visible {
    outline: none;
    background: #ffe4ec;
    border-color: #f9a8c0;
  }

  ${({ $viewportFocused }) =>
    $viewportFocused &&
    `
    border-color: #bdbdbd;
  `}

  ${({ $overlay, $visible }) =>
    $overlay &&
    !$visible &&
    `
    opacity: 0;
    pointer-events: none;
  `}
`;

export const DotsWrapper = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

export const Dot = styled.button`
  width: ${({ $active }) => ($active ? '20px' : '8px')};
  height: 8px;
  border-radius: 4px;
  border: none;
  background: ${({ $active }) => ($active ? '#333' : '#ccc')};
  cursor: pointer;
  padding: 0;
  transition:
    width 0.2s ease,
    background 0.2s ease;
`;

const fillProgress = keyframes`
  from { width: 0%; }
  to { width: 100%; }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 3px;
  background: #e0e0e0;
  border-radius: 2px;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    width: 0%;
    background: #333;
    animation: ${fillProgress} ${({ $duration }) => $duration}s linear forwards;
    animation-play-state: ${({ $paused }) => ($paused ? 'paused' : 'running')};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
      width: 100%;
    }
  }
`;

export const PauseButton = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.6);
  background: rgba(0, 0, 0, 0.35);
  color: #fff;
  cursor: pointer;
  padding: 0;
  backdrop-filter: blur(2px);
  transition: background 0.15s;

  &:hover {
    background: rgba(0, 0, 0, 0.55);
  }

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 2px;
  }
`;
