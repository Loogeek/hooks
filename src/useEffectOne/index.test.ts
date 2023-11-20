import {useEffect} from 'react'
import {renderHook} from '@testing-library/react-hooks/dom'
import {describe, it, vi, expect} from 'vitest'
import { useEffectOnce } from './index'

describe('useEffectOnce', () => {
  it('should be triggered only once', () => {
    const effectFn = vi.fn();
    
    const {rerender}=renderHook(() => useEffectOnce(effectFn))

    expect(effectFn).toBeCalledTimes(1)

    rerender()

    expect(effectFn).toBeCalledTimes(1)
  })
})