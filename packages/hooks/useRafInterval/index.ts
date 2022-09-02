import useLatest from '../useLatest';
import { useCallback, useEffect, useRef } from 'react';
import { isUndef, isNumber } from '../utils';

interface Handle {
  id: number | NodeJS.Timer;
}

function isRafUndef() {
  return typeof requestAnimationFrame === typeof undefined;
}

function isCafUndef(t: any): t is NodeJS.Timer {
  return typeof cancelAnimationFrame === typeof undefined;
}

function setRelInterval(callback: () => void, delay: number = 0): Handle {
  if (isRafUndef()) {
    return {
      id: setInterval(callback, delay),
    };
  }

  let start = new Date().getTime();

  const handle: Handle = {
    id: 0,
  };

  const loop = () => {
    const current = new Date().getTime();

    if (current - start >= delay) {
      callback();
      start = new Date().getTime();
    }

    handle.id = requestAnimationFrame(loop);
  };

  handle.id = requestAnimationFrame(loop);
  return handle;
}

function clearRelInterval(handle: Handle) {
  if (isCafUndef(handle.id)) {
    return clearInterval(handle.id);
  }

  cancelAnimationFrame(handle.id);
}

function useRelInterval(
  fn: () => void,
  delay?: number | undefined,
  options?: {
    immediate?: boolean;
  },
) {
  const fnRef = useLatest(fn);
  const timerRef = useRef<Handle>();

  useEffect(() => {
    if (isUndef(delay) || !isNumber(delay) || delay < 0) return;

    if (options?.immediate) {
      fnRef.current();
    }

    timerRef.current = setRelInterval(() => {
      fnRef.current();
    }, delay);

    return () => {
      if (timerRef.current) {
        clearRelInterval(timerRef.current);
      }
    };
  }, [delay]);

  const clear = useCallback(() => {
    if (timerRef.current) {
      clearRelInterval(timerRef.current);
    }
  }, []);

  return clear;
}

export default useRelInterval;
