import React from "react";
import { TaskList } from "../../components/containers/TaskList";
import { TaskProvider } from "../../hooks/TaskContext";

const TaskPage = () => {
  return (
    <TaskProvider>
      <TaskList />
    </TaskProvider>
  );
};

export default TaskPage;
