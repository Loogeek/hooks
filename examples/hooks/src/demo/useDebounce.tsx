import { useState } from 'react';
import { useDebounce } from '../../../../packages/hooks';

const Component = () => {
  const [value, setState] = useState('');
  const debounceValue = useDebounce<string>(value);

  return (
    <>
      <h3>UseDebounce: </h3>
      <p>value: {value}</p>
      <p>debounceValue: {debounceValue}</p>
      <input onChange={(e) => setState(e.target.value)} />
    </>
  );
};

export default Component;
