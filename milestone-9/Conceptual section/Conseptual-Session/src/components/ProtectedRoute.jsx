import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "./Provider";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  console.log(location);
  const { user } = useContext(authContext);
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location.pathname}></Navigate>;
};

export default ProtectedRoute;
