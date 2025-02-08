import React from "react";
import {MdOutlineDesignServices} from "react-icons/md";
import {HiOutlineWrenchScrewdriver} from "react-icons/hi2";
import {motion} from "framer-motion";

const AboutDetail = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid lg:grid-cols-2 text-start gap-6">
        <div className="mt-8">
          <h1 className=" px-2 text-2xl font-bold tracking-wider relative uppercase  ">
            {" "}
            <MdOutlineDesignServices className="absolute opacity-10 font-light text-8xl -top-11 -left-10" />
            Hobbies
          </h1>
          <motion.div
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1}}
            viewport={{once: true}}
          >
            {" "}
            <p className="md:text-lg mt-6 px-4">
              {" "}
              Playing games, listening to music, reading books, and doing
              sports.{" "}
            </p>
          </motion.div>
        </div>
        <div className="mt-8">
          <h1 className="px-2 text-2xl font-bold tracking-wider relative uppercase  ">
            {" "}
            <HiOutlineWrenchScrewdriver className="absolute opacity-10 font-light text-8xl -top-11 -left-10" />
            soft skills{" "}
          </h1>
          <motion.div
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1}}
            viewport={{once: true}}
          >
            <p className="md:text-lg mt-6  px-4 ">
              {" "}
              Good communication, effective teamwork, adaptability, and
              flexibility.{" "}
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AboutDetail;
