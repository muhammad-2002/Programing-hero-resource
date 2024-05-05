import React from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const singleMongo = useLoaderData();
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const prise = form.prise.value;
    const category = form.category.value;
    const mango = { name, prise, category };
    fetch(`http://localhost:5000/mongos/${singleMongo._id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(mango),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="flex justify-center items-center border w-1/2 mx-auto py-10">
      <div className="w-[90%] mx-auto">
        <h1 className="text-center">Update for {singleMongo.name}</h1>
        <form onSubmit={handleUpdate} className="text-base w-full">
          <fieldset>
            <input
              className="border w-full"
              defaultValue={singleMongo.name}
              type="text"
              name="name"
              id=""
            />
            <br />
            <br />
            <input
              className="border w-full"
              defaultValue={singleMongo.prise}
              type="text"
              name="prise"
              id=""
            />
            <br />
            <br />
            <input
              className="border w-full"
              type="text"
              defaultValue={singleMongo.category}
              name="category"
              id=""
            />
            <br />
            <br />
            <input
              className="text-base text-center cursor-pointer bg-purple-500 w-full py-2 text-white"
              type="submit"
              value="submit"
            />
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Update;
