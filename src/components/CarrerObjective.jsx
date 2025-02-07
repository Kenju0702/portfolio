import React from "react";
import co from "../assets/CAREER OBJECTIVE.jpg"; // Import the image

const CarrerObjective = () => {
  return (
    <div
      className=" lg:text-xl text-lg relative text-white bg-black py-10 flex flex-col items-start bg-cover bg-center"
       // Inline style to apply the image
    >
      <div className="md:w-[60%] mx-16  ">
        <h1 className="font-bold md:text-2xl lg:text-3xl">Carrer Objective</h1>
        <p className="my-4 md:font-medium">
          My primary goal is to become a Fullstack Developer in the e-commerce
          field. I am committed to mastering both front-end and back-end
          technologies like JavaScript, React.js, Node.js, and SQL to build
          efficient, scalable e-commerce solutions. My aim is to leverage these
          skills to create robust systems that cater to the specific needs of
          the e-commerce sector.
        </p>

      </div>
    
    </div>
  );
};

export default CarrerObjective;
