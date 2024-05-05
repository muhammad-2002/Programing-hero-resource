import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import "../style/style.css";
export const MonyContest = createContext("1000");
const Grandpa = () => {
  const [mony, setMony] = useState(1000);
  return (
    <div className="grandpa">
      <h1 className="text-center">Grandpa</h1>
      <MonyContest.Provider value={[mony, setMony]}>
        <section className="text-center flex">
          <Dad></Dad>
          <Uncle></Uncle>
          <Aunty></Aunty>
        </section>
      </MonyContest.Provider>
    </div>
  );
};

export default Grandpa;
