import "../index.css";
import { motion } from "framer-motion";
export const  ProjectItem = ({ image, title, date, desc, reverse }) => (
    <div className={`flex md:gap-2 flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      {/* Phần Text - Đè lên Ảnh */}
      <motion.div
        className="md:w-[300px] w-full order-1 md:order-0"
        initial={{ opacity: 0, x: reverse ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <div className="project-Text md:rounded-lg rounded-b-lg text-left">
          <h1 className="text-purple-400 font-bold uppercase">{title}</h1>
          <h2 className="text-sm font-extrabold">{date}</h2>
          <p className="text-sm">{desc}</p>
        </div>
      </motion.div>
  
      {/* Phần Ảnh */}
      <div className="img-project max-h-[300px] md:justify-end order-0">
        <img
          className="w-full h-[300px] md:rounded-lg rounded-t-lg object-cover"
          src={image}
          alt="Project Screenshot"
        />
      </div>
    </div>
  );
  