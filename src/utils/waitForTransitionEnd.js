const waitForTransitionEnd = (element, property) =>
  new Promise((resolve) => {
    const handler = (e) => {
      if (property && e.propertyName !== property) return;
      element.removeEventListener('transitionend', handler);
      resolve(e);
    };
    element.addEventListener('transitionend', handler);
  });

export default waitForTransitionEnd;
