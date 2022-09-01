import useLatest from '../useLatest';
import { useCallback, useEffect, useRef, useState } from 'react';
import { isUndef, isNumber } from '../utils';

function useInterval(
  fn: () => void,
  delay?: number | undefined,
  options?: {
    immediate?: boolean;
  },
) {
  const fnRef = useLatest(fn);
  const timerRef = useRef<number | NodeJS.Timer>();

  useEffect(() => {
    if (isUndef(delay) || !isNumber(delay) || delay < 0) return;

    if (options?.immediate) {
      fnRef.current();
    }

    timerRef.current = setInterval(() => {
      fnRef.current();
    }, delay);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current as NodeJS.Timer);
      }
    };
  }, [delay]);

  const clear = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current as NodeJS.Timer);
    }
  }, []);

  return clear;
}

export default useInterval;
