const announceToScreenReader = (msg, politeness = 'polite') => {
  const el = document.createElement('div');
  el.setAttribute('aria-live', politeness);
  el.setAttribute('aria-atomic', 'true');
  el.style.cssText =
    'position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0';
  document.body.appendChild(el);
  requestAnimationFrame(() => {
    el.textContent = msg;
    setTimeout(() => document.body.removeChild(el), 1000);
  });
};

export default announceToScreenReader;
