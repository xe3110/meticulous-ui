import { useEffect } from 'react';

export const useSpacebarToggle = (videoRef, containerRef, showVolume) => {
  useEffect(() => {
    const onKeyDown = (e) => {
      // Use code instead of key for layout safety
      if (
        ![
          'Space',
          'KeyF',
          'Escape',
          'ArrowUp',
          'ArrowDown',
          'ArrowLeft',
          'ArrowRight',
          'KeyM',
        ].includes(e.code)
      )
        return;

      const target = e.target;

      // Don't hijack typing or editable content
      if (
        target &&
        (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)
      ) {
        return;
      }

      const video = videoRef.current;
      if (!video) return;

      if (e.code === 'Space') {
        e.preventDefault();
        if (video.paused) {
          const playPromise = video.play();
          if (playPromise && playPromise.catch) {
            playPromise.catch(() => {});
          }
        } else {
          video.pause();
        }
      } else if (e.code === 'KeyF') {
        e.preventDefault();
        if (!document.fullscreenElement) {
          containerRef.current?.requestFullscreen();
        } else {
          document.exitFullscreen();
        }
      } else if (e.code === 'ArrowUp') {
        e.preventDefault();
        video.volume = Math.min(1, video.volume + 0.05);
        showVolume?.(video.volume);
      } else if (e.code === 'ArrowDown') {
        e.preventDefault();
        video.volume = Math.max(0, video.volume - 0.05);
        showVolume?.(video.volume);
      } else if (e.code === 'KeyM') {
        video.muted = !video.muted;
        showVolume?.(video.muted ? 0 : video.volume);
      } else if (e.code === 'ArrowLeft') {
        if (isNaN(video.duration)) return;
        video.currentTime = Math.max(0, video.currentTime - 5);
      } else if (e.code === 'ArrowRight') {
        if (isNaN(video.duration)) return;
        video.currentTime = Math.min(video.duration, video.currentTime + 5);
      }
    };

    window.addEventListener('keydown', onKeyDown, true);

    return () => window.removeEventListener('keydown', onKeyDown, true);
  }, [videoRef, containerRef, showVolume]);
};
