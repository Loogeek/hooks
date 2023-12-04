import React from 'react'
import useIsomorphicLayoutEffect from '.'

export function UseIsomorphicLayoutEffectDemo() {
  useIsomorphicLayoutEffect(() => {
    console.log('In the browser')
  }, [])
  return <div>
    hello world
  </div>
}