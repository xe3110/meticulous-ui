const generateInitials = (name) => {
  if (typeof name !== 'string') return name;
  return name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase())
    .join('');
};

export default generateInitials;
