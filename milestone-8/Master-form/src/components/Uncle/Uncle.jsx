import React from "react";
import Abdullah from "./Cousin/Abdullah";
import Tisha from "./Cousin/Tisha";

const Uncle = () => {
  return (
    <div>
      <h1>Uncle</h1>
      <section className="flex">
        <Tisha></Tisha>
        <Abdullah></Abdullah>
      </section>
    </div>
  );
};

export default Uncle;
