import { useState, useEffect } from 'react';
import { useLatest, useMount, useBoolean } from '../../../packages/hooks/index';
import UseCounter from './demo/useCounter';
import UseUnmount from './demo/useUnmount';
import UseDebounce from './demo/useDebounce';
import UseNetwork from './demo/useNetwork';

function App() {
  const [count, setCount] = useState(0);
  const { value, setFalse, setTrue, toggle, setValue } = useBoolean(false);
  const latestValue = useLatest(count);

  useMount(() => {
    console.log('useMount');

    const timer = setInterval(() => {
      setCount(latestValue.current + 1);
    }, 1000);

    return () => clearInterval(timer);
  });

  const customToggle = () => setValue((x) => !x);

  return (
    <div className="App">
      <span>count: {count}</span>
      <h3>useBoolean</h3>
      <p>
        Value is <code>{value.toString()}</code>
      </p>
      <button onClick={setTrue}>set true</button>
      <button onClick={setFalse}>set false</button>
      <button onClick={toggle}>toggle</button>
      <button onClick={customToggle}>custom toggle</button>

      <UseCounter />

      <UseUnmount />

      <UseDebounce />

      <UseNetwork />
    </div>
  );
}

export default App;
