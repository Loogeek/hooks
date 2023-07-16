import { useCallback, useState } from 'react';

export interface Actions<K, V> {
  set: (key: K, value: V) => void;
  setAll: (newValue: Iterable<readonly [K, V]>) => void;
  remove: (key: K) => void;
  get: (key: K) => V | undefined;
  reset: () => void;  
}

function useMap<K, T>(initialValue?: Iterable<readonly [K, T]>) {
  const getInitialValue = () => {
    return initialValue === undefined ? new Map() : new Map(initialValue);
  };

  const [map, setMap] = useState<Map<K, T>>(() => getInitialValue());

  const actions = {
    set: useCallback((key: K, value: T) => {
      setMap((prev) => {
        const temp = new Map(prev);
        temp.set(key, value);
        return temp;
      });
    }, []),
   setAll: useCallback((newValue: Iterable<readonly [K, T]>) => {
      setMap(new Map(newValue));
    }, []),

    remove: useCallback((key: K) => {
      setMap((prev) => {
        const temp = new Map(prev);
        temp.delete(key);
        return temp;
      });
    }, []),

    get: useCallback((key: K) => map.get(key), []),

    reset: useCallback(() => setMap(getInitialValue), [])
  }

  return [map, actions] as const;
}

export default useMap;
