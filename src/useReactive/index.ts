import { useCallback, useMemo, useRef } from 'react';
import useUpdate from '../useUpdate';
import { isObject } from '../utils';

const proxyMap = new WeakMap();
const rawMap = new WeakMap();

function observer<S extends Record<string, any>>(initialValue: S, cb: () => void) {
  if (proxyMap.has(initialValue)) {
    return proxyMap.get(initialValue);
  }

  // 防止代理已经代理过的对象
  if (rawMap.has(initialValue)) {
    return initialValue;
  }

  const proxy = new Proxy(initialValue, {
    get(target, key, receiver) {
      const res = Reflect.get(target, key, receiver);
      return isObject(res) ? observer(res, cb) : Reflect.get(target, key);
    },
    set(target, key, value, receiver) {
      const res = Reflect.set(target, key, value, receiver);
      cb();
      return res;
    },
    deleteProperty(target, key) {
      const ret = Reflect.deleteProperty(target, key);
      cb();
      return ret;
    },
  });

  proxyMap.set(initialValue, proxy);
  rawMap.set(proxy, initialValue);

  return proxy;
}

function useReactive<S extends Record<string, any>>(initialValue: S): S {
  const updateFn = useUpdate();
  const stateRef = useRef<S>(initialValue);

  const proxy = useMemo(() => observer(stateRef.current, updateFn), []);
  return proxy;
}

export default useReactive;
