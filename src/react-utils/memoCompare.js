import { memo } from 'react';

const memoCompare = (Component, compare) => memo(Component, compare);

export default memoCompare;
