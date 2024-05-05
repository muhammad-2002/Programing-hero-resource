import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const LoadedUsers = useLoaderData();
  const [users, setUsers] = useState(LoadedUsers);
  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("user Deleted success");
          const remaining = users.filter((user) => user._id !== _id);
          setUsers(remaining);
        }
      });
  };

  return (
    <div>
      <h1>ALL Users</h1>
      <div>
        {users.map((u) => (
          <p key={u._id}>
            {u.name} : {u.email}
            <button onClick={() => handleDelete(u._id)}>x</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
