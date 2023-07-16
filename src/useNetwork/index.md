# useNetwork

```jsx
import React from 'react';
import useNetwork from './index.ts';

export default () => {
  const networkState = useNetwork();
  console.log(networkState);
  return (
    <div>
      <div>Network information: </div>
      <pre>{JSON.stringify(networkState)}</pre>
    </div>
  );
};
```