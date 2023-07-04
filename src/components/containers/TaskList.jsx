import React, { useContext, useEffect, useState } from "react";
import { TaskComponent } from "../pure/TaskComponent";
import "../../styles/Task.scss";
import { TaskForm } from "../pure/forms/TaskForm";
import { Spinner } from "../pure/Spinner";
import { TaskContext } from "../../hooks/TaskContext";
import { Filters } from "../pure/Filters";

export const TaskList = () => {
  const { state, addTask, completedTask, removeTask, filter } =
    useContext(TaskContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Task state has been modified");
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      console.log("TaskList component is going to unmount...");
      clearTimeout(timer);
    };
  }, [state]);

  const taskTable = () => {
    return filter.length != 0 ? (
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">Titulo</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Prioridad</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filter.map((task, index) => (
            <TaskComponent
              key={index}
              task={task}
              completed={completedTask}
              deleted={removeTask}
            />
          ))}
        </tbody>
      </table>
    ) : (
      <h3 className="text-danger fw-bold text-center">
        No Hay Tareas Que Mostrar
      </h3>
    );
  };

  return (
    <div className="col-12 my-4">
      <div className="card">
        <div className="card-header p-3">
          <h1 className="fw-bold title">Tus Tareas</h1>
        </div>
        <div
          className="card-body"
          style={{ position: "relative", height: "auto" }}
          data-mdb-perfect-scrollbar="true"
        >
          <div
            className="table-responsive overflow-auto my-3"
            style={{ height: "300px" }}
          >
            {loading ? <Spinner /> : taskTable()}
          </div>
          <div className="d-flex justify-content-center">
            <Filters />
          </div>
          <TaskForm add={addTask} />
        </div>
      </div>
    </div>
  );
};
