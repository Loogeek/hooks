# useSsr

```jsx
import useSsr from './index'

export default function Component() {
  const { isBrowser } = useSsr()

  return <p>{isBrowser ? 'Browser' : 'Server'}!</p>
}
```