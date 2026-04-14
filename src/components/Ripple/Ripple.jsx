import { useRef } from 'react';
import './Ripple.css';

const Ripple = ({
  children,
  rippleColor = 'rgba(255, 255, 255, 0.3)',
  className = '',
  ...props
}) => {
  const containerRef = useRef(null);

  const spawnRipple = (x, y) => {
    const container = containerRef.current;
    if (!container) return;

    const ripple = document.createElement('span');
    const rect = container.getBoundingClientRect();

    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x - size / 2}px`;
    ripple.style.top = `${y - size / 2}px`;
    ripple.style.backgroundColor = rippleColor;
    ripple.classList.add('ripple-effect');

    container.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  };

  const createRipple = (e) => {
    if (e.detail === 0) return; // keyboard-synthesized click, handled by onKeyDown
    const rect = containerRef.current.getBoundingClientRect();
    spawnRipple(e.clientX - rect.left, e.clientY - rect.top);
  };

  const createRippleFromCenter = (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const rect = containerRef.current.getBoundingClientRect();
    spawnRipple(rect.width / 2, rect.height / 2);
  };

  return (
    <div
      ref={containerRef}
      className={`ripple-container ${className}`}
      onClick={createRipple}
      onKeyDown={createRippleFromCenter}
      {...props}
    >
      {children}
    </div>
  );
};

export default Ripple;
