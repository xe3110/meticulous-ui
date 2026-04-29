import { useRef, useEffect } from 'react';

const useFirstRender = () => {
  const isFirst = useRef(true);

  useEffect(() => {
    isFirst.current = false;
  }, []);

  return isFirst.current;
};

export default useFirstRender;
