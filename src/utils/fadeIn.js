const fadeIn = (element, duration = 300) => {
  element.style.opacity = '0';
  element.style.display = '';
  element.style.transition = `opacity ${duration}ms ease`;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      element.style.opacity = '1';
    });
  });
};

export default fadeIn;
