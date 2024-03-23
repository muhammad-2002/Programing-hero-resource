import { useState } from "react";

const ObjUseState = () => {
  const [obj, setObj] = useState({
    obj1: "obj1",
    obj2: "obj2",
    obj3: "obj3",
  });
  const handleClick = () => {
    (previousObj) => {
      setObj({ ...previousObj, obj1: "This is Change" });
    };
  };

  return (
    <div>
      <h1>{obj.obj1}</h1>
      <h1>{obj.obj1}</h1>
      <h1>{obj.obj1}</h1>
      <button onClick={handleClick}>Clicked</button>
    </div>
  );
};

export default ObjUseState;
