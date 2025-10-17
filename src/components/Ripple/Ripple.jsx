import { useRef } from 'react';
import './Ripple.css';

const Ripple = ({ children, rippleColor = 'rgba(0,0,0,0.3)', className = '', ...props }) => {
  const containerRef = useRef(null);

  const createRipple = (e) => {
    const container = containerRef.current;
    if (!container) return;

    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.backgroundColor = rippleColor;

    const rect = container.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;

    // Center ripple on click
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

    container.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  };

  return (
    <div
      ref={containerRef}
      onClick={createRipple}
      className={`ripple-container ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Ripple;
