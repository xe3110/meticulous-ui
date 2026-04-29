import { useEffect, useRef } from 'react';

const useEventListener = (event, handler, target = window) => {
  const savedHandler = useRef(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const el = target && 'current' in target ? target.current : target;
    if (!el?.addEventListener) return;
    const listener = (e) => savedHandler.current(e);
    el.addEventListener(event, listener);
    return () => el.removeEventListener(event, listener);
  }, [event, target]);
};

export default useEventListener;
