import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainUI = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.title = `NEXT - Home`;
    } else if (location.state) {
      document.title = location.state;
    } else {
      document.title = `NEXT -${location.pathname.replace("/", "-")}`;
    }
  }, [location.pathname]);
  return (
    <div className="">
      <div className="w-[85%] mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainUI;
