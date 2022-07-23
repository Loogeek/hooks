import { useState, useEffect } from 'react';
import { useLatest, useMount } from '../../../packages/hooks/index';

function App() {
  const [count, setCount] = useState(0);
  const latestValue = useLatest(count);

  useMount(() => {
    console.log('useMount');

    const timer = setInterval(() => {
      setCount(latestValue.current + 1);
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <div className="App">
      <span>count: {count}</span>
    </div>
  );
}

export default App;
