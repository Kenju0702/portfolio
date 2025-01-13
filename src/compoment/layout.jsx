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
    <div className="flex h-full w-full">
      {/* Sidebar */}
      <div
        className={`bg-blue-500 p-4 transition-all duration-300 ${
          isSidebarOpen || isLargeScreen ? "block" : "hidden"
        } md:block w-64 h-full`}
      >
        <Siderbar />
      </div>

      {/* Main Content */}
      <div
        className="flex-1 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${logo})` }}
      >
    
        {/* Typewriter Text */}
        <span className="text-white text-3xl font-bold justify-center items-center flex h-full">
          {text || "Loading..."}
        </span>
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
        <ListInformation />
      </div>
    </div>
  );
};