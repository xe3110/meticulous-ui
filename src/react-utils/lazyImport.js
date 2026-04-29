import { lazy } from 'react';

const lazyImport = (factory, name) => ({
  [name]: lazy(() => factory().then((module) => ({ default: module[name] }))),
});

export default lazyImport;
