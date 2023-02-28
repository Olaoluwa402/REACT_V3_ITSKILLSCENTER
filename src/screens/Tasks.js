import React, { useState } from "react";
import NewTask from "../components/NewTask/NewTask";
import Modal from "../components/Modal/Modal";

const Tasks = () => {
  const [openCreateTask, setOpenCreateTask] = useState(false);

  return (
    <div>
      {openCreateTask && (
        <Modal>
          <NewTask setOpenCreateTask={setOpenCreateTask} />
        </Modal>
      )}
      {/* tab section */}
      <div className="w-full bg-slate-300 h-[80px] flex items-center ">
        <div className="generalContainer">
          <button
            onClick={() => setOpenCreateTask(true)}
            className="px-[15px] py-[10px] bg-black text-white rounded-lg hover:opacity-40"
          >
            New Task
          </button>
        </div>
      </div>
      {/* <TaskList /> */}
    </div>
  );
};

export default Tasks;
