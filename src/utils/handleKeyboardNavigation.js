const handleKeyboardNavigation = (items, currentIndex, options = {}) => {
  const { onSelect, loop = true, orientation = 'vertical' } = options;

  const prevKey = orientation === 'horizontal' ? 'ArrowLeft' : 'ArrowUp';
  const nextKey = orientation === 'horizontal' ? 'ArrowRight' : 'ArrowDown';

  return (e) => {
    if (e.key === nextKey) {
      e.preventDefault();
      const next = currentIndex + 1 >= items.length ? (loop ? 0 : currentIndex) : currentIndex + 1;
      onSelect?.(next, items[next]);
    } else if (e.key === prevKey) {
      e.preventDefault();
      const prev =
        currentIndex - 1 < 0 ? (loop ? items.length - 1 : currentIndex) : currentIndex - 1;
      onSelect?.(prev, items[prev]);
    } else if (e.key === 'Home') {
      e.preventDefault();
      onSelect?.(0, items[0]);
    } else if (e.key === 'End') {
      e.preventDefault();
      onSelect?.(items.length - 1, items[items.length - 1]);
    }
  };
};

export default handleKeyboardNavigation;
