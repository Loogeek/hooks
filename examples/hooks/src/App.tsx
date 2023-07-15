import { useState, useEffect } from 'react';
import { useLatest, useMount, useBoolean } from '../../../packages/hooks/index';
import UseCounter from './demo/useCounter';
import UseUnmount from './demo/useUnmount';
import UseDebounce from './demo/useDebounce';
import UseNetwork from './demo/useNetwork';
import UseInterval from './demo/useInterval';
import UseMap from '../../../packages/hooks/useMap/demo'
import UseUpdate from '../../../packages/hooks/useUpdate/demo';
import UseReactive from '../../../packages/hooks/useReactive/demo/index'
import UseReactive1 from '../../../packages/hooks/useReactive/demo/demo1'
import UseReactive2 from '../../../packages/hooks/useReactive/demo/demo2'
import UseReactive3 from '../../../packages/hooks/useReactive/demo/demo3'
import UseReactive4 from '../../../packages/hooks/useReactive/demo/demo4'
import UseSetState from '../../../packages/hooks/useSetState/demo/index'
import UseCopyToClipboardDemo from './demo/useCopyToClipboard';


function App() {
  const [count, setCount] = useState(0);
  const { value, setFalse, setTrue, toggle, setValue } = useBoolean(false);
  const latestValue = useLatest(count);

  // useMount(() => {
  //   console.log('useMount');

  //   const timer = setInterval(() => {
  //     setCount(latestValue.current + 1);
  //   }, 1000);

  //   return () => clearInterval(timer);
  // });

  // const customToggle = () => setValue((x) => !x);

  return (
    <div className="App">
      {/* <span>count: {count}</span> */}
      {/* <h3>useBoolean</h3>
      <p>
        Value is <code>{value.toString()}</code>
      </p>
      <button onClick={setTrue}>set true</button>
      <button onClick={setFalse}>set false</button>
      <button onClick={toggle}>toggle</button>
      <button onClick={customToggle}>custom toggle</button> */}

      

      {/* <UseUnmount />

      <UseDebounce />

      <UseNetwork />

      <UseInterval />
   */}
      {/* <UseMap /> */}

      {/* <UseReactive />
      <UseReactive1 />
      <UseReactive2 />
      <UseReactive3 />
      <UseReactive4 /> */}

      {/* <UseUpdate /> */}

      {/* <UseSetState /> */}
      
      <UseCopyToClipboardDemo />
    </div>
  );
}

export default App;
