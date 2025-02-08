import React from "react";
import {motion} from "framer-motion";

const Formcontact = () => {
  return (
    <motion.div
    initial={{opacity: 0, y: 10}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 1}}
    viewport={{once: true}}
  >
    <div className=" ">
      <form action="" className="grid grid-cols-1 py-4 gap-8 md:px-0 px-2 md:mt-0 mt-8">
        <div className="grid grid-cols-2 gap-8">
          <input type="text" placeholder="Name" className="border-l-2 border-b-2 border-white w-full  py-3 px-2 focus:outline-none" />
          <input type="email" placeholder="Email" className="border-l-2 border-b-2 border-white  w-full py-3 px-2" />
        </div>
        <div>
          <textarea placeholder="Message" className="border-l-2 border-b-2 border-white w-full py-4 px-2 focus:outline-none"></textarea>
          <button className="  border-r-2 border-l-2 cursor-pointer py-2 px-2 font-bold my-8 float-right  mr-1 focus:outline-none">
        send</button>
        </div>
      </form>
    </div>
    </motion.div>

  );
};

export default Formcontact;
