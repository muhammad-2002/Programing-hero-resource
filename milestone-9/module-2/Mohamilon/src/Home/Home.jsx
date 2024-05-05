import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Home = () => {
  const AuthInfo = useContext(AuthContext);
  console.log(AuthInfo);
  return (
    <div className="mt-18">
      <h1>This is home page : {AuthInfo.Name}</h1>
    </div>
  );
};

export default Home;
