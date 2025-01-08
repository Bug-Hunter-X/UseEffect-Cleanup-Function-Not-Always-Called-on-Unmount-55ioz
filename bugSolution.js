```javascript
import { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const isMounted = useRef(true);

  useEffect(() => {
    // This effect runs after every render
    console.log('Component rendered:', count);

    return () => {
      isMounted.current = false; // Prevents cleanup function from running if component is unmounted
      console.log('Component unmounting...');
    };
  }, [count]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isMounted.current) {
        setCount(prevCount => prevCount + 1);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```