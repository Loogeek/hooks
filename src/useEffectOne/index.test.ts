import {useEffect} from 'react'
import {renderHook} from '@testing-library/react-hooks/dom'
import {describe, it, vi, expect} from 'vitest'
import { useEffectOne } from './index'

describe('useEffectOne', () => {
  it('should be triggered only once', () => {
    const effectFn = vi.fn();
    
    const {rerender}=renderHook(() => useEffectOne(effectFn))

    expect(effectFn).toBeCalledTimes(1)

    rerender()

    expect(effectFn).toBeCalledTimes(1)
  })
})