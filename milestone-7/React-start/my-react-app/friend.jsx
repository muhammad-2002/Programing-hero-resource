const Friend = ({ counts }) => {
  const { name, email } = counts;
  return (
    <div>
      <h1>Name:{name}</h1>
      <h1>Email:{email}</h1>
    </div>
  );
};

export default Friend;
