import { useState, useCallback, Dispatch, SetStateAction } from 'react';
import useLatest from '../useLatest';

interface ReturnUseCount {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const useCount = (defaultValue?: number): ReturnUseCount => {
  const [count, setCount] = useState(defaultValue || 0);
  const latestValue = useLatest(count);

  const increment = useCallback(() => setCount(latestValue.current + 1), []);
  const decrement = useCallback(() => setCount(latestValue.current - 1), []);
  const reset = useCallback(() => setCount(defaultValue || 0), []);

  return { count, setCount, increment, decrement, reset };
};

export default useCount;
