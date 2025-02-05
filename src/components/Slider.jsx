import React from "react";
import {useTypewriter, Cursor} from "react-simple-typewriter";
import {FaFacebook, FaGithub} from "react-icons/fa";
import {MdOutlineAlternateEmail} from "react-icons/md";
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
      style={{paddingTop: "56.25%", background: "#000"}}
    >
      <div className="absolute w-full h-full top-0 right-0 left-30 flex justify-end items-end">
        <img
          src=''
          alt=""
          className="  w-[55%] h-auto object-contain lg:w-[65%] xl:w-[65%]"
        />
      </div>
      <div
        className="bg-gray-200 absolute top-0 w-1/2 h-full"
        style={{clipPath: "polygon(0 0, 85% 0px, 100% 100%, 0% 100%)"}}
      >
        <div className="flex justify-center flex-col  h-full w-full items-center gap-4">
          <span className="font-bold text-black text-3xl my-3">Hi, I'm a </span>
          <span className="font-bold text-black opacity-70 text-5xl">
            {text} <Cursor cursorStyle="⚡" />
          </span>
          <span className="text-xl opacity-50 my-3 text-black">
            Kenju0702 / Nguyen Quang Tien
          </span>
          <br />
          <div className="flex gap-6 text-black">
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
