import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
  const handleform = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = e.target.name.value;
    const role = e.target.role.value;
    const user = { name, role };
    console.log(user);

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const newUser = [...user, data];
        console.log(newUser);
        setUsers(newUser);

        form.reset();
      });
  };
  return (
    <>
      <h1>Users Management System</h1>
      <h3>Numbers of Users: {users.length}</h3>
      <br />
      <form onSubmit={handleform}>
        <input type="text" name="name" id="" />
        <br />
        <input type="text" name="role" id="" />
        <br />
        <input type="submit" value="submit" />
      </form>
      <br />
      <div>
        {users.map((user) => (
          <p key={Math.random()} className="text-sm">
            Name: {user.name} Role: {user.role}
          </p>
        ))}
      </div>
    </>
  );
}

export default App;
