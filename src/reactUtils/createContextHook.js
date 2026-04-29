import { createContext, useContext } from 'react';

const createContextHook = (defaultValue) => {
  const Context = createContext(defaultValue);

  const useCtx = () => {
    const value = useContext(Context);
    if (value === undefined) throw new Error('useContext must be used inside its Provider');
    return value;
  };

  return [Context.Provider, useCtx];
};

export default createContextHook;
