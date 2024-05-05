import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllMangos = () => {
  const LoadMangos = useLoaderData();
  const [AllMangos, setAllMangos] = useState(LoadMangos);

  console.log(AllMangos);
  let handleDelete = (_id) => {
    fetch(`http://localhost:5000/mongos/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaning = AllMangos.filter((mangos) => mangos._id !== _id);

          setAllMangos(remaning);
        }
      });
  };

  return (
    <div className=" border p-5 w-2/4 mx-auto mt-11">
      <h1 className="text-center text-3xl">Mango List</h1>

      <div className="flex justify-center items-center flex-col">
        {AllMangos.map((mango) => (
          <div
            key={mango._id}
            className="flex justify-between border p-2 my-1 w-full"
          >
            <p className="">
              Name:{mango.name} prise: {mango.prise} category:{mango.category}
            </p>
            <div className="gap-2 flex">
              <Link to={`/mongos/${mango._id}`}>
                <button className="bg-purple-500 font-bold text-white px-3 py-1">
                  Update
                </button>
              </Link>
              <button
                onClick={() => handleDelete(mango._id)}
                className="bg-red-600 font-bold text-white px-3 py-1"
              >
                delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMangos;
