import "./App.css";
import User from "./User";
import useUser from "./useUser";

function App() {
  // const [users, setUsers] = useState([]);
  const { refetch, isLoading, data } = useUser();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    console.log(name);
    fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name: name }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setUsers([...users, { _id: data.insertedId, name }]);
        if (data.insertedId) {
          refetch();
        }
      });
  };
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:3000/user/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          refetch();
        }
      });
  };
  if (isLoading) {
    return (
      <p style={{ height: "100vh", color: "red", zIndex: "1" }}>Loading.....</p>
    );
  }
  return (
    <div>
      <div>
        {data.map((user) => (
          <User key={user._id} handleDelete={handleDelete} user={user}></User>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="textarea" name="name" id="" />
        <br />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default App;
