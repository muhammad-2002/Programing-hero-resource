import { useEffect, useState } from "react";
import Friend from "./friend";

const UseEffect = () => {
  const [count, setCount] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setCount(data));
  }, []);
  let d = {
    border: "2px solid red",
    padding: "30px",
  };

  return (
    <div style={d}>
      <p>length:{count.length}</p>

      {count.map((couts) => (
        <Friend counts={couts}></Friend>
      ))}
    </div>
  );
};

export default UseEffect;
