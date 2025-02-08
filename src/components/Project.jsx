import React from "react";
import "../index.css";
import {motion} from "framer-motion";

export const Project = () => {
  return (
    <div className="w-full flex flex-col gap-16 md:px-0 px-2 text-start">
      <div className=" project">
        {/* Phần Text - Đè lên Ảnh */}
        <motion.div className="2xl:mb-80  order-1 w-full 2xl:absolute "
          initial={{opacity: 0, x: -20}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 1.5}}
          viewport={{once: true}}
        >
          <div className=" project-Text 2xl:absolute 2xl:left-0 md:h-[325px]">
            <h4 className="text-purple-400 font-bold uppercase tracking-wide">
              ClothStore
            </h4>
            <h1 className="2xl:text-xl text-base font-extrabold my-2">
              November 2023 – January 2024
            </h1>
            <p className="text-base leading-relaxed text-start">
              ClothStore is an e-commerce website project that marked my first
              foray into freelance web development. Working on this project was
              a pivotal learning experience, as it challenged me to combine
              design, functionality., and user experience into a seamless online
              shopping platform
            </p>
          </div>
        </motion.div>

        {/* Phần Ảnh */}
        <div className="img-project justify-end">
          <img
            className="w-full max-w-3xl  rounded-xl border-purple-400 border-r-2 border-t-12 "
            src="https://raw.githubusercontent.com/Kaicity/Cloth-Store-Ecommerce/main/Cloth-Store-Client-FE/src/assets/Screenshot%202024-05-19%20235908.png"
            alt="Project Screenshot"
          />
        </div>
      </div>
      <div className=" project ">
        {/* Phần Text - Đè lên Ảnh */}
        <motion.div className="md:mb-80  order-1 w-full 2xl:absolute "
          initial={{opacity: 0, x: 2}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 1.5}}
          viewport={{once: true}}
        >
        <div className=" project-Text 2xl:absolute 2xl:right-0 md:h-[325px]">
          <h4 className="text-purple-400 font-bold uppercase tracking-wide">
            excavator
          </h4>
          <h1 className="2xl:text-xl text-base font-extrabold my-2">
            July 2024 - August 2024
          </h1>
          <p className="text-base leading-relaxed text-start">
            Excavator Landing is a comprehensive project developed to create a
            dynamic and engaging landing page specifically tailored for the
            heavy equipment industry. The goal was to deliver an immersive
            online experience that not only highlights the features of modern
            excavators but also serves as an effective lead generation tool for
            potential clients
          </p>
        </div>
        </motion.div>

        {/* Phần Ảnh */}
        <div className="img-project 2xl:justify-start">
          <img
            className="w-full max-w-3xl  rounded-xl border-purple-400 border-r-2 border-t-12 "
            src="https://raw.githubusercontent.com/Kenju0702/portfolio/refs/heads/main/src/assets/landingpage.png"
            alt="Project Screenshot"
          />
        </div>
      </div>
      <div className=" project  relative">
        {/* Phần Text - Đè lên Ảnh */}
        <motion.div className="md:mb-80  order-1 w-full 2xl:absolute "
          initial={{opacity: 0, x: -20}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 1.5}}
          viewport={{once: true}}
        >
        <div className=" project-Text md:absolute md:left-0  md:h-[325px]">
          <h4 className="text-purple-400 font-bold uppercase tracking-wide">
            VietgroupEduNet{" "}
          </h4>
          <h1 className="2xl:text-xl text-base font-extrabold my-2">
            September 2024 – January 2025
          </h1>
          <p className="text-base leading-relaxed text-start">
            During my internship, I supported the development of
            VietgroupEduNet, an HR management website designed specifically for
            Vietroupedu. This project aimed to streamline and automate various
            HR processes, providing an efficient tool for managing employee
            records, attendance, performance evaluations, and internal
            communications.
          </p>
        </div>
        </motion.div>

        {/* Phần Ảnh */}
        <div className="img-project justify-end">
          <img
            className="w-full max-w-3xl  rounded-xl border-purple-400 border-r-2 border-t-12 "
            src="https://portfolio-kaicitys-projects.vercel.app/assets/img/projects/vge/vge.png"
            alt="Project Screenshot"
          />
        </div>
      </div>
    </div>
  );
};
