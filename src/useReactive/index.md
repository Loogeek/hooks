# useReactive

## demo1

```jsx
import React from 'react';
import useReactive from './index';

export default () => {
  const state = useReactive({
    count: 0,
    inputVal: '',
    obj: {
      value: '',
    },
  });

  return (
    <div>
      <p> state.count：{state.count}</p>

      <button style={{ marginRight: 8 }} onClick={() => state.count++}>
        state.count++
      </button>
      <button onClick={() => state.count--}>state.count--</button>

      <p style={{ marginTop: 20 }}> state.inputVal: {state.inputVal}</p>
      <input onChange={(e) => (state.inputVal = e.target.value)} />

      <p style={{ marginTop: 20 }}> state.obj.value: {state.obj.value}</p>
      <input onChange={(e) => (state.obj.value = e.target.value)} />
    </div>
  );
};

```

## demo2

```jsx
import React from 'react';
import useReactive from './index';

export default () => {
  const state = useReactive<{ arr: number[] }>({
    arr: [],
  });

  return (
    <div>
      <p>
        state.arr: <span role="test-array">{JSON.stringify(state.arr)}</span>
      </p>
      <button
        style={{ marginRight: '10px' }}
        onClick={() => state.arr.push(Math.floor(Math.random() * 100))}
        role="pushbtn"
      >
        push
      </button>
      <button style={{ marginRight: '10px' }} onClick={() => state.arr.pop()} role="popbtn">
        pop
      </button>
      <button style={{ marginRight: '10px' }} onClick={() => state.arr.shift()} role="shiftbtn">
        shift
      </button>
      <button
        style={{ marginRight: '10px' }}
        role="unshiftbtn"
        onClick={() => state.arr.unshift(Math.floor(Math.random() * 100))}
      >
        unshift
      </button>
      <button style={{ marginRight: '10px' }} role="reverse" onClick={() => state.arr.reverse()}>
        reverse
      </button>
      <button style={{ marginRight: '10px' }} role="sort" onClick={() => state.arr.sort()}>
        sort
      </button>
    </div>
  );
};

```

## demo3
```jsx
import React from 'react';
import useReactive from './index';

export default () => {
  const state = useReactive({
    bug: '',
    bugs: ['feat', 'fix', 'chore'],
    addBug(bug: string) {
      this.bugs.push(bug);
    },
    get bugsCount() {
      return this.bugs.length;
    },
  });

  return (
    <div>
      <p>state.bugsCount: {state.bugsCount}</p>

      <form
        onSubmit={(e) => {
          state.addBug(state.bug);
          state.bug = '';
          e.preventDefault();
        }}
      >
        <input type="text" value={state.bug} onChange={(e) => (state.bug = e.target.value)} />
        <button type="submit" style={{ marginLeft: '10px' }}>
          Add
        </button>
        <button type="button" style={{ marginLeft: '10px' }} onClick={() => state.bugs.pop()}>
          Delete
        </button>
      </form>

      <br />

      <ul>
        {state.bugs.map((bug) => (
          <li key={bug}>{bug}</li>
        ))}
      </ul>
    </div>
  );
};

```

## demo4

```jsx
/**
 * desc: useReactive returns a proxy object which always has the same reference. If `useEffect`, `useMemo`, `useCallback` and props passed to child component rely on the proxy, none of the above will be invoked by any changes to the proxy.
 *
 * desc.zh-CN: useReactive 产生可操作的代理对象一直都是同一个引用，`useEffect` , `useMemo` ,`useCallback` ,`子组件属性传递` 等如果依赖的是这个代理对象是**不会**引起重新执行。
 */

 import React, { useEffect, useState } from 'react';
 import useReactive from './index';
 
 export default () => {
   const state = useReactive({ count: 0 });
   const [stateCount, setStateCount] = useState(0);
 
   const state2 = useReactive({ count: 0 });
   const [stateCount2, setStateCount2] = useState(0);
 
   // Depends on the object, because it is always the same reference, it will not be executed
   useEffect(() => {
     setStateCount(stateCount + 1);
   }, [state]);
 
   // Depends on the underlying data type, so as long as it changes, it will be re-executed
   useEffect(() => {
     setStateCount2(stateCount2 + 1);
   }, [state2.count]);
 
   return (
     <div>
       <button style={{ marginTop: 20 }} onClick={() => (state.count += 1)}>
         stateCount + 1
       </button>
       <p>stateCount:{stateCount}</p>
 
       <button style={{ marginTop: 20 }} onClick={() => (state2.count += 1)}>
         stateCount2 + 1
       </button>
       <p>stateCount2:{stateCount2}</p>
     </div>
   );
 };
 
```