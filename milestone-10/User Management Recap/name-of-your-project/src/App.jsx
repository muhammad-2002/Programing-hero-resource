import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const handleform = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const role = form.role.value;
    const user = { name, role };
    console.log(user);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers((prevUser) => {
          return [...prevUser, ...data];
        });
        form.reset();
      });
  };

  return (
    <div>
      <h1>User Management Systme </h1>
      <h1>Total User : {users.length} </h1>

      <div>
        {users.map((u) => (
          <p key={u.id}>
            {u.name} : {u.role}
          </p>
        ))}
        <form onSubmit={handleform}>
          <input type="text" name="name" id="" />
          <br />
          <input type="text" name="role" id="" />
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    </div>
  );
}

export default App;
