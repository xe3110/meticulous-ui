import { lazy } from 'react';

const lazyLoadComponent = (importFn) => lazy(importFn);

export default lazyLoadComponent;
