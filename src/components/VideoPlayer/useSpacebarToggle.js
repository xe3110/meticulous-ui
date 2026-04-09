import { useEffect } from 'react';

export const useSpacebarToggle = (videoRef, containerRef, showVolume) => {
  useEffect(() => {
    const onKeyDown = (e) => {
      console.log(e.code);

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

      e.preventDefault();

      const video = videoRef.current;
      if (!video) return;

      if (e.code === 'Space') {
        if (video.paused) {
          const playPromise = video.play();
          if (playPromise && playPromise.catch) {
            playPromise.catch(() => {});
          }
        } else {
          video.pause();
        }
      } else if (e.code === 'KeyF') {
        if (!document.fullscreenElement) {
          containerRef.current?.requestFullscreen();
        } else {
          document.exitFullscreen();
        }
      } else if (e.code === 'ArrowUp') {
        video.volume = Math.min(1, video.volume + 0.05);
        showVolume?.(video.volume);
      } else if (e.code === 'ArrowDown') {
        video.volume = Math.max(0, video.volume - 0.05);
        showVolume?.(video.volume);
      } else if (e.code === 'KeyM') {
        video.volume = video.volume > 0 ? 0 : 1;
        showVolume?.(video.volume);
      } else if (e.code === 'ArrowLeft') {
        if (video.currentTime > 5) {
          video.currentTime -= 5;
        } else if (video.currentTime > 0) {
          video.currentTime = 0;
        }
      } else if (e.code === 'ArrowRight') {
        if (video.currentTime < video.duration - 5) {
          video.currentTime += 5;
        } else if (video.currentTime < video.duration) {
          video.currentTime = video.duration;
        }
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  }, [videoRef, containerRef, showVolume]);
};
