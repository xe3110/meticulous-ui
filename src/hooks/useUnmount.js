import { useEffect, useRef } from 'react';

const useUnmount = (callback) => {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    return () => savedCallback.current();
  }, []);
};

export default useUnmount;
