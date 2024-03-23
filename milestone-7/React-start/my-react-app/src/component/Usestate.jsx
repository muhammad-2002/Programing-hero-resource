import { useState } from "react";

const Usestate = () => {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    const counted = count + 1;
    return setCount(counted);
  };
  const removeAdd = () => {
    const counted = count - 1;
    if (counted === -1) {
      return 0;
    }
    return setCount(counted);
  };
  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={removeAdd}>Remove</button>
    </div>
  );
};

export default Usestate;
