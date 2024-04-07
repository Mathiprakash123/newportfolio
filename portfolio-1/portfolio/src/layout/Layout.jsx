import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className=" bg-black w-full h-full px-52 py-5 text-white">
      <NavBar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Layout;