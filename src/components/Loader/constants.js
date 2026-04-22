export const SMALL = 'small';
export const MEDIUM = 'medium';
export const LARGE = 'large';

export const SIZE = {
  [SMALL]: { dot: '0.5rem', gap: '0.3rem' },
  [MEDIUM]: { dot: '0.75rem', gap: '0.5rem' },
  [LARGE]: { dot: '1rem', gap: '0.7rem' },
};

export const BLUE = 'blue';
export const GREEN = 'green';
export const PURPLE = 'purple';
export const ORANGE = 'orange';
export const PINK = 'pink';

export const THEME_SHADE = ['m200', 'm300', 'm400', 'm600', 'm800'];

// Delays evenly distributed across the 0.85s cycle (0.85s / 5 dots = 0.17s apart)
export const ANIMATION_DELAYS = [0, 0.17, 0.34, 0.51, 0.68];
