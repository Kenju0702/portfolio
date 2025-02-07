import React from "react";
import {FaAnglesUp} from "react-icons/fa6";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const Footerpage = () => {
  return (
    <div className="text-center">
      <div className="text-center p-4">
        <a href="#" className=" md:hover:text-purple-500">
          {" "}
          <FaAnglesUp className="w-full text-xl mx-auto my-1" />
          back to top
        </a>
      </div>

      <ul className=" flex justify-center gap-8 text-4xl py-2">
        <li className="footer-icon">
          <a href=""><FaFacebook /></a>
        </li>
        <li className="footer-icon">
          <a href=""><MdAlternateEmail /></a>
        </li>
        <li className="footer-icon">
          <a href=""><FaGoogle />
          </a>
        </li>
        <li className="footer-icon">
          <a href=""><FaGithub />
          </a>
        </li>
      </ul>
      <h4 className="py-8 ">@2025 NguyenQuangTien All Right Reserved</h4>
    </div>
  );
};

export default Footerpage;
