import { useState, useEffect } from 'react';

// interface UseDebounce<T> {
//   value: T;
//   wait?: number;
// }

const useDebounce = <T>(value: T, wait: number = 300) => {
  let timer: NodeJS.Timeout | undefined;
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    timer = setInterval(() => setDebounceValue(value), wait);
    return () => clearTimeout(timer);
  }, [value, wait]);

  return debounceValue;
};

export default useDebounce;
