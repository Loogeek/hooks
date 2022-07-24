import { useEffect } from 'react';
import { isFunction, isDevEnv } from '../utils';
import useLatest from '../useLatest';

const useUnmount = (fn: () => void) => {
  if (isDevEnv && !isFunction(fn)) {
    console.error(`useUnmount expected parameter is a function, but got ${typeof fn}`);
  }

  const fnRef = useLatest(fn);

  useEffect(() => () => fnRef.current(), []);
};

export default useUnmount;
