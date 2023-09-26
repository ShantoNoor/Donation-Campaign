import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

const MainLayout = () => {
  const classes =
    "bg-bg1 h-[600px] bg-cover bg-no-repeat object-cover bg-center";
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      document.title = "Donation Campaign";
    } else {
      document.title =
        pathname.slice(1, -1).toUpperCase() + " | Donation Campaign";
    }
  }, [pathname]);

  return (
    <div className={pathname === "/" ? classes : ""}>
      <div className="container py-12">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
