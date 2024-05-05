import React from "react";
import Personal from "./Personal/Personal";

const Myself = () => {
  return (
    <div>
      <h1>Myself</h1>
      <section className="flex">
        <Personal></Personal>
      </section>
    </div>
  );
};

export default Myself;
