import React from "react";

const Formcontact = () => {
  return (
    <div className=" ">
      <form action="" className="grid grid-cols-1 py-4 gap-8">
        <div className="grid grid-cols-2 gap-8">
          <input type="text" placeholder="Name" className="border-l-2 border-b-2 border-white w-full  py-3 px-2 focus:outline-none" />
          <input type="email" placeholder="Email" className="border-l-2 border-b-2 border-white  w-full py-3 px-2" />
        </div>
        <div>
          <textarea placeholder="Message" className="border-l-2 border-b-2 border-white w-full py-4 px-2 focus:outline-none"></textarea>
          <button className="  border-r-2 border-l-2 cursor-pointer py-2 px-2 font-bold my-8 float-right  mr-1 focus:outline-none">
        send</button>
        </div>
      </form>
    </div>
  );
};

export default Formcontact;
