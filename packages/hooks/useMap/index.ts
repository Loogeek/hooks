import { useState } from 'react';

function useMap<K, T>(initialValue?: Iterable<readonly [K, T]>) {
  const getInitialValue = () => {
    return initialValue === undefined ? new Map() : new Map(initialValue);
  };

  const [map, setMap] = useState<Map<K, T>>(() => getInitialValue());

  const set = (key: K, value: T) => {
    setMap((prev) => {
      const temp = new Map(prev);
      temp.set(key, value);
      return temp;
    });
  };

  const setAll = (newValue: Iterable<readonly [K, T]>) => {
    setMap(new Map(newValue));
  };

  const remove = (key: K) => {
    setMap((prev) => {
      const temp = new Map(prev);
      temp.delete(key);
      return temp;
    });
  };

  const get = (key: K) => map.get(key);

  const reset = () => setMap(getInitialValue);

  return [map, { set, remove, get, reset, setAll }] as const;
}

export default useMap;
