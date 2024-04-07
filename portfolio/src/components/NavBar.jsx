import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="bg-black text-white flex justify-between mt-5">
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
        <h3 className=" mt-1 font-bold text-xl">
          <Link to={"/"}>Portfolio</Link>
        </h3>
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
          <button className=" bg-purple-600 rounded-xl px-5 py-1 hover:bg-purple-700 flex justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 16 16"
              className=" fill-current mx-3"
            >
              <path
                fill="currentColor"
                d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38c0-.27.01-1.13.01-2.2c0-.75-.25-1.23-.54-1.48c1.78-.2 3.65-.88 3.65-3.95c0-.88-.31-1.59-.82-2.15c.08-.2.36-1.02-.08-2.12c0 0-.67-.22-2.2.82c-.64-.18-1.32-.27-2-.27c-.68 0-1.36.09-2 .27c-1.53-1.03-2.2-.82-2.2-.82c-.44 1.1-.16 1.92-.08 2.12c-.51.56-.82 1.28-.82 2.15c0 3.06 1.86 3.75 3.64 3.95c-.23.2-.44.55-.51 1.07c-.46.21-1.61.55-2.33-.66c-.15-.24-.6-.83-1.23-.82c-.67.01-.27.38.01.53c.34.19.73.9.82 1.13c.16.45.68 1.31 2.69.94c0 .67.01 1.3.01 1.49c0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8"
              />
            </svg>
            GitHub
          </button>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
