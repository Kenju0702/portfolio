import React from "react";
import logo from "../assets/image1.jpg";

function ListInformation() {
  return (
    <div className="flex h-full gap-4">
      {/* Left Side: Image */}
      <div className="bg-cyan-400 h-32 w-32">
        <img 
          src="https://th.bing.com/th/id/OIP.6pcaiQHAVJQLZTY04ZwZOQHaEK?w=279&h=180&c=7&r=0&o=5&pid=1.7" 
          alt="Example" 
          className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side: List */}
      <div className=" bg-red-600 h-32  w-32">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">List Information</h1>
        <ul className="list-none pl-0 space-y-2 text-gray-800">
          <li className="hover:text-blue-500 cursor-pointer">Hello</li>
          <li className="hover:text-blue-500 cursor-pointer">Jello</li>
          <li className="hover:text-blue-500 cursor-pointer">Thell</li>
          <li className="hover:text-blue-500 cursor-pointer">Hahah</li>
        </ul>
      </div>
    </div>
  );
}


export default ListInformation;
