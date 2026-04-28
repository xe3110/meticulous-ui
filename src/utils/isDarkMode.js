const isDarkMode = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

export default isDarkMode;
