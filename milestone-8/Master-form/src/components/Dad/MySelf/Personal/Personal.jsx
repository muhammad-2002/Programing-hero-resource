import React, { useContext } from "react";
import { MonyContest } from "../../../Grandpa/Grandpa";

const Personal = () => {
  const [mony, setmony] = useContext(MonyContest);
  return (
    <div>
      <h1>Personal</h1>
      <p>has:{mony}</p>
      <button onClick={() => setmony(mony + 1000)}>Add 1000</button>
    </div>
  );
};

export default Personal;
