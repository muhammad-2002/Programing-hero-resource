import React from "react";
import Brother from "./Brother/Brother";
import Myself from "./MySelf/Myself";
import Sister from "./Sister/Sister";

const Dad = () => {
  return (
    <div>
      <h1>Dad</h1>
      <section className="flex">
        <Myself></Myself>
        <Sister></Sister>
        <Brother></Brother>
      </section>
    </div>
  );
};

export default Dad;
