import { useMemo } from 'react';
import throttle from 'lodash.throttle';
import useLatest from '../useLatest';
import useUnmount from '../useUnmount';
import { isFunction } from '../utils';
import { isDev } from '../utils/isDev';

export interface ThrottleOptions {
  wait?: number;
  leading?: boolean;
  trailing?: boolean;
}

type noop = (...args: any[]) => any;

function useThrottleFn<T extends noop>(fn: T, options: ThrottleOptions) {
  if (isDev) {
    if (!isFunction) {
      console.error(`useThrottle expected parameter is a function, but got ${typeof fn}`);
    }
  }
  const wait = options?.wait ?? 1000;
  const fnRef = useLatest(fn);

  const throttled = useMemo(
    () => throttle((...args: Parameters<T>): ReturnType<T> => fnRef.current(args), wait, options),
    [],
  );

  useUnmount(() => {
    throttled.cancel();
  });

  return {
    run: throttled,
    cancel: throttled.cancel,
    flush: throttled.flush,
  };
}

export default useThrottleFn;
