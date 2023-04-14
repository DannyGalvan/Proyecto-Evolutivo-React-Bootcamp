import React, { useEffect, useState } from "react";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import { TaskComponent } from "../pure/TaskComponent";
import "../../styles/Task.scss";
import { TaskForm } from "../pure/forms/TaskForm";
import { Spinner } from "../pure/Spinner";

export const TaskList = () => {
  const defaultTask1 = new Task(
    "Ejemplo1",
    "Descripcion por defecto 1",
    false,
    LEVELS.NORMAL
  );

  const defaultTask2 = new Task(
    "Ejemplo2",
    "Descripcion por defecto 2",
    false,
    LEVELS.BLOCKING
  );

  const defaultTask3 = new Task(
    "Ejemplo3",
    "Descripcion por defecto 3",
    false,
    LEVELS.URGENT
  );

  const [tasks, setTasks] = useState([
    defaultTask1,
    defaultTask2,
    defaultTask3,
  ]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Task state has been modified");
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => {
      console.log("TaskList component is going to unmount...");
      clearTimeout(timer);
    };
  }, [tasks]);

  const completedTask = (task) => {
    const tempTask = [...tasks];
    const indx = tempTask.indexOf(task);
    tempTask[indx].completed = !tempTask[indx].completed;
    setTasks(tempTask);
  };

  const deleteTask = (task) => {
    const tempTask = [...tasks];
    const indx = tempTask.indexOf(task);
    tempTask.splice(indx, 1);
    setTasks(tempTask);
  };

  const addTask = (task) => {
    const tempTask = [...tasks];
    tempTask.push(task);
    setTasks(tempTask);
  };

  const taskTable = () => {
    return tasks.length != 0 ? (
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
          {tasks.map((task, index) => (
            <TaskComponent
              key={index}
              task={task}
              completed={completedTask}
              deleted={deleteTask}
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
          <TaskForm add={addTask} />
        </div>
      </div>
    </div>
  );
};
