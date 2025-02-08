import {motion} from "framer-motion";

export default function ContentSection({title, content, button}) {
  return (
    <div className="p-2">
      <h1 className="  mx-auto py-6 px-10 my-20  md:text-3xl w-full md:w-[410px] font-bold border-4 border-purple-500 bg-black tracking-[0.3em] uppercase">
        {title}
      </h1>
      <motion.div
        initial={{opacity: 0, x: 10}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 1}}
        viewport={{once: true}}
      >
        {" "}
        <p className=" md:px-0 px-4 text-xl md:mb-8 text-start  ">
          {content}
        </p>
      </motion.div>
    </div>
  );
}
