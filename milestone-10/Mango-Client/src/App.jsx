function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const prise = form.prise.value;
    const category = form.category.value;
    const mango = { name, prise, category };

    fetch("http://localhost:5000/mongos", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(mango),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Successfully");
        }
      });
  };
  return (
    <div className="flex flex-col justify-center items-center mt-14  border w-[50%] py-9 mx-auto">
      <h1 className="text-2xl font-bold text-red-400">Mango Details</h1>
      <br />
      <form onSubmit={handleSubmit} className="text-base w-[90%]">
        <fieldset>
          <input
            className="border w-full"
            placeholder="Enter Mango name"
            type="text"
            name="name"
            id=""
          />
          <br />
          <br />
          <input
            className="border w-full"
            placeholder="Enter Mango Prise"
            type="text"
            name="prise"
            id=""
          />
          <br />
          <br />
          <input
            className="border w-full"
            type="text"
            placeholder="Enter Category"
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
  );
}

export default App;
