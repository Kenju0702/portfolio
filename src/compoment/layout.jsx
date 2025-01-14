import React, { useEffect, useState } from "react";
import { Siderbar } from "./sidebar";
import { useAppContext } from "../appcontext/AppContext";
import { IconButton } from "./iconbutton";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import logo from "../assets/image1.jpg";
import { useTypewriter } from "react-simple-typewriter";
import ListInformation from "./listInfomation";

export const Layout = () => {
  const { isSidebarOpen, toggleSidebar } = useAppContext();
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", checkScreenSize);
    checkScreenSize();

    return () => {
      window.removeEventListener("resize", checkScreenSize);
      toggleSidebar(false);
    };
  }, []);

  const [text] = useTypewriter({
    words: [
      "Welcome to my website",
      "I'm a web developer",
      "I'm a programmer",
      "I'm a designer",
      "I'm a freelancer",
      "I'm a fullstack developer",
    ],
    autoStart: true,
  });

  return (
    <div className="relative flex flex-col w-full h-screen">
      {/* Sidebar */}
      <div
        className={`bg-blue-500 p-4 transition-all duration-500 transform ${
          isSidebarOpen || isLargeScreen
            ? "absolute top-0 left-0 h-full w-64 opacity-100 translate-x-0 z-50"
            : "absolute top-0 left-0 h-full w-64 opacity-0 -translate-x-full"
        }`}
      >
        <Siderbar />
      </div>

      {/* Main Content */}
      <div
        className="flex-grow bg-cover bg-center relative flex justify-center items-center"
        style={{ backgroundImage: `url(${logo})` }}
      >
        {/* Typewriter Text */}
        <span className="text-white text-3xl font-bold">{text || "Loading..."}</span>

        {/* Toggle Sidebar Button (on small screens) */}
        {!isLargeScreen && (
          <div className="absolute top-4 right-4">
            <IconButton
              icon={!isSidebarOpen ? Bars3Icon : XMarkIcon}
              onClick={toggleSidebar}
              className="bg-red-100 text-red-600 hover:bg-red-200"
              aria-label="Collapse Sidebar"
            />
          </div>
        )}
      </div>

      {/* Bottom Div */}
      <div className="bg-cyan-50 w-full h-32">
        {/* Add content here if necessary */}
        <ListInformation />
      </div>
    </div>
  );
};
