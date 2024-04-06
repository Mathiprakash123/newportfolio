import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className=" bg-black w-full h-full px-80 py-5">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;
