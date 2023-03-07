import React, { useContext } from "react";
import TaskCard from "../TaskCard/TaskCard";
import GlobalContext from "../../context";

const TaskList = ({ tasks }) => {
  const { setOpenUpdateTask, setUpdateId, getTasks } =
    useContext(GlobalContext);

  return (
    <div className="flex items-center flex-wrap">
      {tasks && tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            setUpdateId={setUpdateId}
            getTasks={getTasks}
            setOpenUpdateTask={setOpenUpdateTask}
          />
        ))
      ) : (
        <div className="w-full h-screen flex justify-center items-center">
          {" "}
          <h2>No Task yet</h2>
        </div>
      )}
    </div>
  );
};

export default TaskList;
