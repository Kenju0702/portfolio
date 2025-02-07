import React, { useEffect, useState } from "react";
import logo from "../assets/blob1.jpg";
import { IoMdMenu } from "react-icons/io";

const Nav = () => {
  // Khởi tạo state hiển thị menu
  const [isDivVisible, setIsDivVisible] = useState(true);

  useEffect(() => {
    // Hàm xử lý thay đổi kích thước
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Nếu kích thước màn hình nhỏ hơn 768px (mobile)
        setIsDivVisible(false);
      } else {
        // Nếu màn hình lớn hơn hoặc bằng 768px (tablet/PC)
        setIsDivVisible(true);
      }
    };

    // Kiểm tra kích thước màn hình ban đầu
    handleResize();

    // Lắng nghe sự kiện thay đổi kích thước
    window.addEventListener("resize", handleResize);

    // Cleanup: loại bỏ sự kiện khi component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    // Toggle trạng thái hiển thị menu (đặc biệt hữu ích với mobile)
    setIsDivVisible((prevState) => !prevState);
  };

  return (
    <>
      {/* Nút menu hiển thị trên mobile (ẩn trên md trở lên) */}
      <div className="md:hidden fixed top-0 z-20 right-0">
        <a
          href=""
          onClick={handleClick}
          className="mx-1 my-1 p-2 z-10 transition-transform duration-300"
        >
          <IoMdMenu className="text-purple-400 text-3xl" />
        </a>
      </div>

      {/* Navigation bar */}
      <div
        className="fixed top-0 left-0 justify-between bg-black opacity-80 w-full z-10"
        style={{ display: isDivVisible ? "flex" : "none" }}
      >
        <div className="w-1/4 hidden md:flex justify-center">
          <a href="#">
            <img src={logo} alt="logo" className="w-16 h-16 my-1" />
          </a>
        </div>
        <div className="md:w-3/4 w-full">
          <ul className="md:flex justify-center items-center h-full">
            <li className="nav-li">
              <a href="#About" className="nav-a">
                About
              </a>
            </li>
            <li className="nav-li">
              <a href="#Skills" className="nav-a">
                Skills
              </a>
            </li>
            <li className="nav-li">
              <a href="#Portfolio" className="nav-a">
                Portfolio
              </a>
            </li>
            <li className="nav-li">
              <a href="#Contact" className="nav-a">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
