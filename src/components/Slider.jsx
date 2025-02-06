import React from "react";
import {useTypewriter, Cursor} from "react-simple-typewriter";
import {FaFacebook, FaGithub} from "react-icons/fa";
import {MdOutlineAlternateEmail} from "react-icons/md";
// import logo from "../assets/nqt.jpg";
const Slider = () => {
  const [text] = useTypewriter({
    words: ["Front-end Developer", "UI Designer", "React Enthusiast"],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });
  return (
    <div
      className="relative w-full h-3/4 "
      style={{paddingTop: "56.25%", background: "#fff"}}
    >
      <div className="imgslider absolute w-full h-full top-0 right-0 left-0 flex justify-end items-end bg-gray-500">

      </div>
      <div
        className="bg-gray-950 opacity-90 absolute top-0 w-1/2 h-full"
        style={{clipPath: "polygon(0 0, 85% 0px, 100% 100%, 0% 100%)"}}
      >
        <div className="flex justify-center flex-col  h-full w-full items-center gap-4">
          <span className="font-bold text-white text-3xl my-3">Hi, I'm a </span>
          <span className="font-bold text-white text-5xl">
            {text} <Cursor cursorStyle="⚡" />
          </span>
          <span className="text-xl opacity-50 my-3 text-white">
            Kenju0702 / Nguyen Quang Tien
          </span>
          <br />
          <div className="flex gap-6 text-white">
            <div className="  cursor-pointer hover:opacity-60 shadow-lg border border-amber-100 rounded-md p-4 flex items-center justify-center">
              <a href="https://github.com/Kenju0702">
                <FaGithub className="text-xl" />
              </a>
            </div>
            <div className="  cursor-pointer hover:opacity-60 shadow-lg border border-amber-100 rounded-md p-4 flex items-center justify-center">
              <a href="mailto:nguyenquangtienvn2022@gmail.com">
                <MdOutlineAlternateEmail className="text-xl" />
              </a>
            </div>
            <div className="  cursor-pointer hover:opacity-60 shadow-lg border border-amber-100 rounded-md p-4 flex items-center justify-center">
              <a href="https://www.facebook.com/hihi.hi.kenju/">
                <FaFacebook className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
