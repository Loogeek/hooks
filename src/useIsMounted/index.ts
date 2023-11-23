/*
 * @Author: Loogeek xiaolong3956@gmail.com
 * @Date: 2023-11-23 13:02:15
 * @LastEditors: Loogeek xiaolong3956@gmail.com
 * @LastEditTime: 2023-11-23 13:04:45
 * @FilePath: /hooks/src/useIsMounted/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {useRef, useEffect, useCallback, } from 'react'

export function useIsMounted () {
  const isMounted = useRef(false)

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    }
  }, [])

  return useCallback(() => isMounted.current, [])
}