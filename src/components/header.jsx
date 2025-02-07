import React, { useRef, useState } from "react";
import logo from "../assets/blob1.jpg";
import { IoMdMenu } from "react-icons/io";

const Nav = () => {
  const [isDivVisible, setIsDivVisible] = useState(false);
  const handleClick = (event) => {
    event.preventDefault(); 
    setIsDivVisible((prevState) => !prevState);

  };
  return (
    <>
    <div className=" md:hidden fixed top-0 z-20 right-0" >
      <a href="" onClick={handleClick} className="mx-1 my-1 p-2 block z-10  transition-transform duration-300"><IoMdMenu className="text-purple-400 text-3xl" />
      </a>
    </div>
    <div className=" fixed top-0 left-0 md:flex  justify-between bg-black opacity-80 w-full z-10" style={{ display: isDivVisible ? "block" : "none" }}>
      <div className="w-1/4 hidden  md:flex justify-center">
        <a href="#">
          <img src={logo} alt="logo" className="w-16 h-16 my-1" />
        </a>
      </div>
      <div className="md:w-3/4 w-full">
      
        <ul className="md:flex justify-center items-center h-full">
          <li className="nav-li ">
            <a
              href="#About"
              className="nav-a "
            >
              About
            </a>
          </li>
          <li className="nav-li">
            <a
              href="#Skills"
              className=" nav-a "
            >
              Skills
            </a>
          </li>
          <li className="nav-li">
            <a
              href="#Portfolio"
              className=" nav-a  "
            >
              Portfolio
            </a>
          </li>
          <li className="nav-li">
            <a
              href="#Contact"
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
