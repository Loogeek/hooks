/*
 * @Author: Loogeek xiaolong3956@gmail.com
 * @Date: 2023-11-23 13:04:59
 * @LastEditors: Loogeek xiaolong3956@gmail.com
 * @LastEditTime: 2023-11-23 14:32:14
 * @FilePath: /hooks/src/useIsMounted/index.test.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {renderHook} from '@testing-library/react'
import {describe, test, it, expect} from 'vitest'
import { useIsMounted } from  './index'

describe('useIsMounted()', () => {
  test('should return true when component is mounted', () => {
    const {result: {current: isMounted}} = renderHook(() => useIsMounted())

    expect(isMounted()).toBe(true)    
  })
  
  test('should return false when component is unmounted', () => {
    const {result: {current: isMounted}, unmount} = renderHook(() => useIsMounted())

    unmount()
    expect(isMounted()).toBe(false)    
  })
})