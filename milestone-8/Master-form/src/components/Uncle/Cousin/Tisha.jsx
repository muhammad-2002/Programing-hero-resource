import React, { useContext } from "react";
import { MonyContest } from "../../Grandpa/Grandpa";

const Tisha = () => {
  const [taka, setTaka] = useContext(MonyContest);
  return (
    <div>
      <h1>Tisha</h1>
      <p>has:{taka}</p>
    </div>
  );
};

export default Tisha;
