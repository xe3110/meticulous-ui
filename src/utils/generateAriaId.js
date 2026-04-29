let counter = 0;

const generateAriaId = (prefix = 'aria') => `${prefix}-${++counter}`;

export default generateAriaId;
