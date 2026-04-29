const fadeOut = (element, duration = 300) => {
  element.style.transition = `opacity ${duration}ms ease`;
  element.style.opacity = '0';
  setTimeout(() => {
    element.style.display = 'none';
  }, duration);
};

export default fadeOut;
