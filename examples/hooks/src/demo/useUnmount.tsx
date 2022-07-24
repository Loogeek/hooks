import { useUnmount, useBoolean } from '../../../../packages/hooks';

const MyComponent = () => {
  useUnmount(() => {
    console.log('unmount MyComponent');
  });

  return <div>MyComponent</div>;
};

const Component = () => {
  const { value, toggle } = useBoolean(true);

  return (
    <div>
      <h3>UseUnmount: </h3>
      <button onClick={toggle}>{value ? 'unmount' : 'mount'}</button>
      {value && <MyComponent />}
    </div>
  );
};

export default Component;
