import React, { useContext } from "react";
import { TaskContext } from "../../hooks/TaskContext";

export const Filters = () => {
  const { pendingTasks, allTasks, completedTasks } = useContext(TaskContext);

  return (
    <div className="btn-group gap-4 p-4">
      <button onClick={allTasks}>Todas Las Tareas</button>
      <button onClick={pendingTasks}>Tareas Pendientes</button>
      <button onClick={completedTasks}>Tareas Completadas</button>
    </div>
  );
};

