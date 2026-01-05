import { useEffect } from 'react';

export const useSpacebarToggle = (videoRef) => {
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
        video.requestFullscreen();
      } else if (e.code === 'ArrowUp') {
        if (video.volume <= 0.95) {
          video.volume += 0.05;
        } else if (video.volume < 1) {
          video.volume = 1;
        }
      } else if (e.code === 'ArrowDown') {
        if (video.volume >= 0.05) {
          video.volume -= 0.05;
        } else if (video.volume > 0) {
          video.volume = 0;
        }
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
      } else if (e.code === 'KeyM') {
        if (video.volume > 0) {
          video.volume = 0;
        } else {
          video.volume = 1;
        }
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  }, [videoRef]);
};
