import React from "react";
import { IoMdCloseCircle } from "react-icons/io";

const NewTask = ({ setOpenCreateTask }) => {
  return (
    <div className="w-[300px] h-[340px] bg-white drop-shadow-xl rounded-md relative">
      {" "}
      <h2 className="text-dark">New Task</h2>
      <div></div>
      <div
        onClick={() => setOpenCreateTask(false)}
        className="absolute top-2 right-3 text-[20px] cursor-pointer"
      >
        <IoMdCloseCircle />
      </div>
    </div>
  );
};

export default NewTask;
