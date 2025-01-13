import React from "react";

function ListInformation() {
  return (
    <div>
        <image src="https://th.bing.com/th/id/OIP.6pcaiQHAVJQLZTY04ZwZOQHaEK?w=279&h=180&c=7&r=0&o=5&pid=1.7" />
      <div className="p-4">
        <ul className="list-disc pl-6 space-y-2 text-gray-800">
          <li className="hover:text-blue-500">Hello</li>
          <li className="hover:text-blue-500">Jello</li>
          <li className="hover:text-blue-500">Thell</li>
          <li className="hover:text-blue-500">Hahah</li>
        </ul>
      </div>
    </div>
  );
}

export default ListInformation;
