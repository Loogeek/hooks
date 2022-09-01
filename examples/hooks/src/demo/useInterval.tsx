import React, { useState } from 'react';
import { useInterval } from '../../../../packages/hooks';

export default () => {
  const [count, setCount] = useState(0);
  const [interval, setInterval] = useState<number | undefined>(1000);

  const clear = useInterval(() => {
    setCount(count + 1);
  }, interval);

  return (
    <div>
      <p> count: {count} </p>
      <p style={{ marginTop: 16 }}> interval: {interval} </p>
      <button
        onClick={() => setInterval((t) => (!!t ? t + 1000 : 1000))}
        style={{ marginRight: 8 }}
      >
        interval + 1000
      </button>
      <button
        style={{ marginRight: 8 }}
        onClick={() => {
          setInterval(1000);
        }}
      >
        reset interval
      </button>
      <button onClick={clear}>clear</button>
    </div>
  );
};