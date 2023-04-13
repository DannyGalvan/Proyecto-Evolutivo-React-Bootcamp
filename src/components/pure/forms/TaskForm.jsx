import React, { useRef, useState } from "react";
import { LEVELS } from "../../../models/levels.enum";
import { Task } from "../../../models/task.class";

export const TaskForm = ({ add }) => {
  const [colorSelectValue, setColorSelectValue] = useState("");
  const nameRef = useRef(null);
  const descriptionRef = useRef(null);
  const levelRef = useRef(LEVELS.URGENT);

  const addTask = (e) => {
    e.preventDefault();
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    );
    add(newTask);
    e.target.reset();
  };

  const changeSelectValue = (e) => {
    const value = e.target.value;
    console.log(value);
    switch (value) {
      case LEVELS.NORMAL:
        setColorSelectValue("bg-info text-light");
        break;
      case LEVELS.URGENT:
        setColorSelectValue("bg-warning text-light");
        break;
      case LEVELS.BLOCKING:
        setColorSelectValue("bg-danger text-light");
        break;
      default:
        setColorSelectValue("bg-light")
        break;
    }
  };

  return (
    <form className="text-dark card container-fluid" onSubmit={addTask}>
      <div className="row justify-content-center">
        <div className="col-12 col-lg-6 mb-2">
          <label className="form-label" htmlFor="nombre">
            Nombre:
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            required
            autoFocus
            ref={nameRef}
          />
        </div>
        <div className="col-12 col-lg-6 mb-2">
          <label className="form-label" htmlFor="descripcion">
            Descripcion:
          </label>
          <input
            type="text"
            className="form-control"
            id="descripcion"
            required
            autoFocus
            ref={descriptionRef}
          />
        </div>
        <div className="col-12 col-lg-6 mb-2">
          <label className="form-label" htmlFor="prioridad">
            Prioridad:
          </label>
          <select
            className={`form-select ${colorSelectValue}`}
            id="prioridad"
            required
            autoFocus
            ref={levelRef}
            onChange={changeSelectValue}
          >
            <option value="" className="text-center">-- selecciona una prioridad --</option>
            <option value={LEVELS.NORMAL} className="badge bg-info">
              {LEVELS.NORMAL}
            </option>
            <option value={LEVELS.URGENT} className="badge bg-warning">
              {LEVELS.URGENT}
            </option>
            <option value={LEVELS.BLOCKING} className="badge bg-danger">
              {LEVELS.BLOCKING}
            </option>
          </select>
        </div>
        <div className="col-12 col-lg-6 mb-2">
          <button className="btn btn-primary">
            {" "}
            <i className="bi bi-file-earmark-plus"></i> Agregar Tarea
          </button>
        </div>
      </div>
    </form>
  );
};
