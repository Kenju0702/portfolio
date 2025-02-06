import React from "react";
import logo from "../assets/blob1.jpg";

const Nav = () => {
  return (
    <div>
      <div className="display flex justify-between bg-black w-full">
        <div className="w-1/4 flex justify-center">
          <img src={logo} alt="loi" className="w-16 h-16 my-1" />
        </div>
        <div className=" w-3/4">
            <ul className="flex justify-center content-center h-full">
            <li className=" my-6 mx-12 text-center ">
              <a
                href=""
                className="  text-base bg-black text-white rounded-full py-2 px-4  hover:bg-white hover:text-black "
              >
                About me
              </a>
            </li>

            <li className=" my-6 mx-12 text-center ">
              <a
                href=""
                className="  text-base bg-black text-white rounded-full py-2 px-4  hover:bg-white hover:text-black "
              >
               Skills
              </a>
            </li>

            <li className=" my-6 mx-12 text-center ">
              <a
                href=""
                className="  text-base bg-black text-white rounded-full py-2 px-4  hover:bg-white hover:text-black "
              >
               Portfolio
              </a>
            </li>

            <li className=" my-6 mx-12 text-center ">
              <a
                href=""
                className="  text-base bg-black text-white rounded-full py-2 px-4  hover:bg-white hover:text-black "
              >
               Contact me
              </a>
            </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
