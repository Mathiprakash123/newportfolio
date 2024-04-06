import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="bg-black text-white flex justify-between">
      {/* header */}
      <div className="flex space-x-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          className=" fill-current cursor-pointer"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          >
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" />
            <path d="M12 22c-3.314 0-6-4.477-6-10S8.686 2 12 2" />
          </g>
        </svg>
        <h3 className=" pt-1 font-bold"><Link to={"/"}>Portfolio</Link></h3> 
      </div>

      {/* content */}
      <div className=" space-x-6 font-semibold pt-1">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/skills"}>Skills</Link>
        <Link to={"/project"}>Project</Link>
      </div>

      {/* github button */}
      <div>
        <a href="https://github.com/Mathiprakash123">
          <button className=" bg-purple-600 rounded-xl px-5 py-1 hover:bg-purple-700">
            GitHub
          </button>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
