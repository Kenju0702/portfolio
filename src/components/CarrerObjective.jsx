import React from "react";
import co from "../assets/CAREER OBJECTIVE.jpg"; // Import the image
import {motion} from "framer-motion";

const CarrerObjective = () => {
  return (
    <div
      className=" lg:text-xl text-lg relative text-white bg-black py-10 flex flex-col items-start bg-cover bg-center"
      // Inline style to apply the image
    >
      <div className="md:w-[60%] md:mx-16   ">
        <h1 className="font-bold md:text-2xl lg:text-3xl mx-2 md:mx-0">
          Carrer Objective
        </h1>
        <motion.div
          initial={{opacity: 0, y: 10}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 1}}
          viewport={{once: true}}
        >
          {" "}
          <p className="my-4 md:font-medium mx-4 md:mx-0">
            My primary goal is to become a Fullstack Developer in the e-commerce
            field. I am committed to mastering both front-end and back-end
            technologies like JavaScript, React.js, Node.js, and SQL to build
            efficient, scalable e-commerce solutions. My aim is to leverage
            these skills to create robust systems that cater to the specific
            needs of the e-commerce sector.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default CarrerObjective;
