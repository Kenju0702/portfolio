import React from "react";

export const IconButton = ({ icon: Icon, onClick, className = "", ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-6 h-6" />}
    </button>
  );
};

