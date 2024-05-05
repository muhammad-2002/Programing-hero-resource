import { Outlet } from "react-router-dom";
import Home from "../Home/Home";
import Navbar from "../Nabvar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <div className="h-32">
        <Navbar></Navbar>
      </div>
      <div className="flex justify-center">
        <Outlet></Outlet>
      </div>
      <Home></Home>
    </div>
  );
};

export default MainLayout;
