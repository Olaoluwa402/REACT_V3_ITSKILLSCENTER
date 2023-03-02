import React, { useState, useEffect } from "react";
import NewTask from "../components/NewTask/NewTask";
import Modal from "../components/Modal/Modal";
import TaskList from "../components/TaskList/TaskList";

const Tasks = () => {
  const [openCreateTask, setOpenCreateTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, [openCreateTask]);

  console.log(tasks);
  function getTasks() {
    const tasks = localStorage.getItem("tasks");
    const tasksJSON = JSON.parse(tasks);
    console.log(tasksJSON, "tsas");
    setTasks(tasksJSON);
  }

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

      {/* tasks component */}
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Tasks;
