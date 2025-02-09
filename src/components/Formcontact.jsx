import React, {useState} from "react";
import {motion} from "framer-motion";

const Formcontact = () => {
  // Khởi tạo state để lưu các giá trị của form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Hàm xử lý thay đổi giá trị trong input
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  // Xây dựng mailto link dựa trên giá trị của email và message nhập vào
  // Ở đây, subject sẽ lấy giá trị email và body lấy giá trị message.
  // Bạn có thể thay đổi cấu trúc theo yêu cầu, ví dụ bao gồm cả tên nếu cần.
  const mailtoLink = `mailto:nguyenquangtienvn2022@gmail.com?subject=${encodeURIComponent(
    formData.email
  )}&body=${encodeURIComponent(
    `Hello, my name is ${formData.name}\n${formData.message}`
  )}`;

  return (
    <motion.div
      initial={{opacity: 0, y: 10}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 1}}
      viewport={{once: true}}
    >
      <div>
        <form className="grid grid-cols-1 py-4 gap-8 md:px-0 px-2 md:mt-0 mt-8">
          <div className="grid grid-cols-2 gap-8">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border-l-2 border-b-2 border-white w-full py-3 px-2 focus:outline-none"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border-l-2 border-b-2 border-white w-full py-3 px-2 focus:outline-none"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Message"
              className="border-l-2 border-b-2 border-white w-full py-4 px-2 focus:outline-none"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {/* Sử dụng thẻ a với mailto link được xây dựng động */}
            <a
              href={mailtoLink}
              className="border-r-2 border-l-2 cursor-pointer py-2 px-2 font-bold my-8 float-right mr-1 focus:outline-none"
            >
              Send
            </a>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Formcontact;
