const ReUseableForm = ({ button, formTitle, handleSubmit, children }) => {
  const handleSubmits = (e) => {
    e.preventDefault(e);
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    handleSubmit(data);
  };
  return (
    <div>
      {/* <h1>{formTitle}</h1> */}
      <h1> {children}</h1>

      <form onSubmit={handleSubmits}>
        <input type="text" name="name" id="" />
        <br></br>
        <input type="email" name="email"></input>
        <br></br>
        <input type="password" name="password"></input>
        <br />
        <input type="submit" value={button} />
      </form>
    </div>
  );
};

export default ReUseableForm;
