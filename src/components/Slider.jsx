import React from "react";
import {useTypewriter, Cursor} from "react-simple-typewriter";
import {FaFacebook, FaGithub} from "react-icons/fa";
import {MdOutlineAlternateEmail} from "react-icons/md";
import logo from "../assets/tuitentien.jpg";
import {motion} from "framer-motion";

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
      className="relative w-full h-3/4 z-10 md:py-30"
      style={{paddingTop: "56.25%", background: "#fff"}}
    >
      <div className=" imgslider absolute w-full h-full top-0 right-0 left-0 flex justify-end items-end bg-black md:bg-gray-500" >
      <motion.div className="md:w-1/2 w-full h-full flex md:justify-center md:mb-8 text-start"
    initial={{opacity: 0, y: 50}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 1}}
    viewport={{once: true}}
  >
        <div className=" md:text-base md:text-center 2xl:text-center flex flex-col gap-3  mx-auto justify-center md:w-[100%]  h-full items-center ">
          <img
            src={logo}
            alt="Avatar"
            className=" lg:mt-0 w-32 h-32 md:w-38 md:h-38  lg:w-48 lg:h-48 rounded-full  p-2 mx-auto border-4 border-purple-500  shadow-lg object-cover  transition-transform duration-300 hover:scale-105"
          />

          <h2 className="md:text-lg font-bold text-white  ">
            My name is Nguyen Quang Tien
          </h2>
          <p className="sm:block hidden text-lg text-gray-300 xl:text-xl md:w-full opacity-80 ">
            Currently, I am in my final year at the university.
            <br />
            <span className="">(Just one subject left before I graduate!)</span>
          </p>
        </div>
        </motion.div>

      </div>
      <div
        className="md:block hidden bg-gray-950 opacity-90 absolute top-0 w-1/2 h-full"
        style={{clipPath: "polygon(0 0, 85% 0px, 100% 100%, 0% 100%)"}}
      >
          <motion.div className="flex w-full h-full items-center"
    initial={{opacity: 0, y: -50}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 1}}
    viewport={{once: true}}
  >
        <div className="flex justify-center mt-18 lg:mt-4 flex-col  h-full w-full items-center lg:gap-4">
          <span className="font-bold text-white text-lg lg:text-3xl ">
            Hi, I'm a{" "}
          </span>
          <span className="font-bold text-white lg:text-4xl">
            {text} <Cursor cursorStyle="⚡" />
          </span>
          <span className="lg:text-xl opacity-50  text-white">
            Kenju0702 / Nguyen Quang Tien
          </span>
          <br />
          <div className="flex gap-6 text-white">
            <div className="slider-item">
              <a target="_blank" href="https://github.com/Kenju0702">
                <FaGithub className="text-xl group-hover:opacity-60" />
              </a>
            </div>

            <div className=" slider-item">
              <a target="_blank" href="mailto:nguyenquangtienvn2022@gmail.com">
                <MdOutlineAlternateEmail className="text-xl" />
              </a>
            </div>
            <div className=" slider-item">
              <a target="_blank" href="https://www.facebook.com/hihi.hi.kenju/">
                <FaFacebook className="text-xl" />
              </a>
            </div>
          </div>
        </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slider;
