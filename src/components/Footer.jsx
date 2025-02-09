import React from "react";
import {FaAnglesUp} from "react-icons/fa6";
import {  FaFacebookF, FaPhone } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { SiZalo } from "react-icons/si";

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
          <a target="_blank" href="https://www.facebook.com/hihi.hi.kenju"><FaFacebookF /></a>
        </li>
        <li className="footer-icon">
          <a target="_blank" href="mailto:nguyenquangtienvn2022@gmail.com"><MdAlternateEmail /></a>
        </li>
        <li className="footer-icon">
          <a target="_blank" href="https://zalo.me/0582200103"><SiZalo />
          </a>
        </li>
        <li className="footer-icon">
          <a target="_blank" href="tel:+84582200103"><FaPhone />
          </a>
        </li>
      </ul>
      <h4 className="py-8 ">@2025 NguyenQuangTien All Right Reserved</h4>
    </div>
  );
};

export default Footerpage;
