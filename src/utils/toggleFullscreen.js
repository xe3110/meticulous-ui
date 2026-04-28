const toggleFullscreen = (element = document.documentElement) => {
  if (!document.fullscreenElement) {
    element.requestFullscreen?.();
  } else {
    document.exitFullscreen?.();
  }
};

export default toggleFullscreen;
