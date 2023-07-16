import { useEffect } from 'react';
import { isFunction } from '../utils';
import { isDev } from '../utils/isDev';
import useLatest from '../useLatest';

const useUnmount = (fn: () => void) => {
  if (isDev) {
    if (!isFunction(fn)) {
      console.error(`useUnmount expected parameter is a function, but got ${typeof fn}`);
    }
  }

  const fnRef = useLatest(fn);

  useEffect(() => () => fnRef.current(), []);
};

export default useUnmount;
