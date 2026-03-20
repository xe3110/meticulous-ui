import { useRef } from 'react';
import './Ripple.css';

const Ripple = ({
  children,
  rippleColor = 'rgba(255, 255, 255, 0.3)',
  className = '',
  ...props
}) => {
  const containerRef = useRef(null);

  const createRipple = (e) => {
    const container = containerRef.current;
    if (!container) return;

    const ripple = document.createElement('span');
    const rect = container.getBoundingClientRect();

    // Calculate size to cover the entire element
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.backgroundColor = rippleColor;
    ripple.classList.add('ripple-effect');

    container.appendChild(ripple);

    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });
  };

  return (
    <div
      ref={containerRef}
      className={`ripple-container ${className}`}
      onClick={createRipple}
      {...props}
    >
      {children}
    </div>
  );
};

export default Ripple;
