import { useState, useCallback } from 'react'
import { isFunction } from '../utils/index';

export type SetState<S extends Record<string, any>> = <K extends keyof S>(
  state: Pick<S, K> | null | ((prevState: Readonly<S>) => Pick<S, K> | S | null),
) => void;

function useSetState<S extends Record<string, any>, K extends keyof S>(
  inivalValue: S | (() => S)
  ): [S, SetState<S>] {
    const [state, setState] = useState(inivalValue)

    const setMergeState = useCallback((patch: any) => {
        setState(preState => {
          const newState = isFunction(patch) ? patch(preState) : patch

          return newState ? {
            ...preState,
            ...newState
          } : preState
        })
      }, [])

    return [state, setMergeState]
}

export default useSetState