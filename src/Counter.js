import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  function counter() {
    setCount(count + 1);
  }

  return (
    <div>
      <button data-testid='counter-button' onClick={counter}>
        {count}
      </button>
    </div>
  );
};
export default Counter;
