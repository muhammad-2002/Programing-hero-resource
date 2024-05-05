import React from "react";

const User = ({ user, handleDelete }) => {
  return (
    <div style={{ backgroundColor: "yellow", padding: "4px", display: "flex" }}>
      <h1>User:{user.name}</h1>
      <h1 onClick={() => handleDelete(user._id)}>delete</h1>
    </div>
  );
};

export default User;
