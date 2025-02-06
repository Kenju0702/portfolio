import React from "react";
import logo from "../assets/blob1.jpg";

const Nav = () => {
  return (
    <div className="fixed top-0 left-0 flex justify-between bg-black w-full z-10">
      <div className="w-1/4 flex justify-center">
        <a href="#">
          <img src={logo} alt="logo" className="w-16 h-16 my-1" />
        </a>
      </div>
      <div className="w-3/4">
        <ul className="flex justify-center items-center h-full">
          <li className="nav-li">
            <a
              href=""
              className="nav-a text-base bg-black text-white rounded-full py-2 px-4"
            >
              About
            </a>
          </li>
          <li className="nav-li">
            <a
              href=""
              className=" nav-a text-base bg-black text-white rounded-full py-2 px-4 "
            >
              Skills
            </a>
          </li>
          <li className="nav-li">
            <a
              href=""
              className=" nav-a text-base bg-black text-white rounded-full py-2 px-4 "
            >
              Portfolio
            </a>
          </li>
          <li className="nav-li">
            <a
              href=""
              className=" nav-a text-base bg-black text-white rounded-full py-2 px-4"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
