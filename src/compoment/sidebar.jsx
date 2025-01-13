import React from "react";
import card from "../assets/image1.jpg";
import { IoIosHome, IoIosPerson, IoIosCall, IoIosSettings } from "react-icons/io";
import { useAppContext } from "../appcontext/AppContext";

const menu = [
  {
    name: "Home",
    icon: <IoIosHome />,
  },
  {
    name: "About",
    icon: <IoIosPerson />,
  },
  {
    name: "Contact",
    icon: <IoIosCall />,
  },
  {
    name: "Settings",
    icon: <IoIosSettings />,
  },
];

export const Siderbar = () => {
  const { isSidebarOpen } = useAppContext(); // Access context

  return (
    <section
    >
      {/* Avatar and Border */}
      <div className="relative w-32 h-32 mx-auto mt-16">
      
          <>
            <div className="absolute inset-0 border-4 border-gray-700 rounded-full"></div>
            <img
              src={card}
              alt="Avatar"
              className="w-full h-full object-cover rounded-full"
            />
          </>
      </div>

      {/* Profile Text */}
        <div className="text-center mt-8">
          <span className="text-white font-medium">Profile</span>
        </div>

      {/* Menu Items */}
      <div className="mt-8">
        <ul>
          {menu.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-center space-x-2 p-2 cursor-pointer hover:bg-gray-600 rounded-md"
            >
              {/* Dynamically adjusting icon size using React Icons' size prop */}
              <span>
                {React.cloneElement(item.icon, {
                  size:32 ,
                  
                })}
              </span>
                <span className="text-white ml-2">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
