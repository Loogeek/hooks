import React, {useState, useEffect} from 'react'
import {useIsMounted} from '.'

// const delay = (ms: number) => new Promise(resolve => setInterval(resolve, ms))

// function Child() {
//   const [data, setData] = useState('loading')
//   useEffect(() => {
//     void delay(3000).then(() => {
//       setData('done')
//     })
//   }, [])

//   return <p>{data}</p>
// }

// export function UseIsMountedDemo() {
//   const [isVisible, setVisible] = useState(false)

//   const toggleVisibility = () => setVisible(state => !state)

//   return (
//     <>
//       <button onClick={toggleVisibility}>{isVisible ? 'Hide' : 'Show'}</button>

//       {isVisible && <Child /> }
//     </>
//   )
// }

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

function Child() {
  const [data, setData] = useState('loading')
  const isMounted = useIsMounted()

  // simulate an api call and update state
  useEffect(() => {
    void delay(3000).then(() => {
      if (isMounted()) setData('OK')
    })
  }, [isMounted])

  return <p>{data}</p>
}

export  function UseIsMountedDemo() {
  const [isVisible, setVisible] = useState<boolean>(false)

  const toggleVisibility = () => setVisible(state => !state)

  return (
    <>
      <button onClick={toggleVisibility}>{isVisible ? 'Hide' : 'Show'}</button>

      {isVisible && <Child />}
    </>
  )
}