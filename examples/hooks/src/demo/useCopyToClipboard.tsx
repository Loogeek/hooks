import React from 'react'
import {useCopyToClipboard} from '../../../../packages/hooks'

const UseCopyToClipboardDemo = () => {
  const [value, copy] = useCopyToClipboard()
  return (
    <>    
    <h1>click to copy:</h1>
    <div
      style={{display: 'flex'}}
    >
      <button onClick={() => copy('A')}>A</button>  
      <button onClick={() => copy('B')}>B</button>  
      <button onClick={() => copy('C')}>C</button>  
      <p>Copied value: {value ?? 'Nothing is copied yet!'}</p>
    </div>
    </>
  )
}

export default UseCopyToClipboardDemo