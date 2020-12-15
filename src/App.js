import React, { useState } from 'react';

function App() {
  // "count" adında yeni bir state değişkeni tanımlayın.
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clickeds {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default App