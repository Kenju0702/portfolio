import React from "react";
import logo from "../assets/blob1.jpg";
import { IoMdMenu } from "react-icons/io";

const Nav = () => {
  return (
    <>
    <div className="p-6 md:hidden fixed top-0 z-10 right-0" ><a href=""></a><IoMdMenu className="text-black float-right text-3xl" />
    </div>
    <div className="hidden md:fixed top-0 left-0 flex justify-between bg-black w-full z-10">
      <div className="w-1/4 hidden  md:flex justify-center">
        <a href="#">
          <img src={logo} alt="logo" className="w-16 h-16 my-1" />
        </a>
      </div>
      <div className="md:w-3/4 w-full">
      
        <ul className="md:flex  justify-center items-center h-full">
          <li className="nav-li ">
            <a
              href=""
              className="nav-a "
            >
              About
            </a>
          </li>
          <li className="nav-li">
            <a
              href=""
              className=" nav-a "
            >
              Skills
            </a>
          </li>
          <li className="nav-li">
            <a
              href=""
              className=" nav-a  "
            >
              Portfolio
            </a>
          </li>
          <li className="nav-li">
            <a
              href=""
              className=" nav-a"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default Nav;
