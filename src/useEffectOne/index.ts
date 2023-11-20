import {EffectCallback, useEffect} from 'react'

export function useEffectOne(effect: EffectCallback) {
  useEffect(effect, [])
}
