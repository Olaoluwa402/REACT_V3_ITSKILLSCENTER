import React from "react";
import { FaTrashAlt, FaEdit, FaShareAlt } from "react-icons/fa";

const TaskCard = ({ task, setOpenUpdateTask, setUpdateId }) => {
  const truncate = (str, num) => {
    if (str.length > num) {
      str = str.substring(0, num) + "...";
      return str;
    }
    return str;
  };

  return (
    <div className="w-[250px] h-[300px] flex flex-col drop-shadow-md rounded-md bg-slate-400 m-4 p-2">
      <div className="flex-1">
        <h2 className="font-bold">{truncate(task.title, 20)}</h2>
        <p style={{ wordWrap: "break-word" }}>{truncate(task.desc, 300)}</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          <FaTrashAlt className="cursor-pointer" />{" "}
          <FaEdit
            className="cursor-pointer"
            onClick={() => {
              setUpdateId(task.id);
              setOpenUpdateTask(true);
            }}
          />
        </div>
        <FaShareAlt className="cursor-pointer" />
      </div>
    </div>
  );
};

export default TaskCard;
