import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { LEVELS } from "../../../models/levels.enum";
import { Task } from "../../../models/task.class";

const initialValues = {
  name: "",
  description: "",
  level: LEVELS.NORMAL,
};

const taskSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, "El nombre debe tener minimo 5 caracteres")
    .required("El campo 'nombre' no puede ser vacio"),
  description: Yup.string()
    .required("El campo 'descripcion' no puede ser vacio")
    .min(10, "la descripcion debe tener minimo 10 caracteres"),
  level: Yup.string().required("Debes seleccionar una 'Prioridad'"),
});

export const TaskFomik = ({ add }) => {
  const sendForm = (values) => {
    const newTask = new Task(
      values.name,
      values.description,
      false,
      values.level
    );

    add(newTask);
  };
  return (
    <div className="card">
      <h4 className="text-center text-dark">Creando Tareas Con Formik</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={taskSchema}
        onSubmit={sendForm}
      >
        <Form className="container text-dark">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6 mb-2">
              <label htmlFor="name" className="form-label">
                Nombre
              </label>
              <Field name="name" type="text" className="form-control" />
              <span className="text-danger">
                <ErrorMessage name="name" />
              </span>
            </div>

            <div className="col-12 col-lg-6 mb-2">
              <label htmlFor="description" className="form-label">
                Contraseña
              </label>
              <Field name="description" type="text" className="form-control" />
              <span className="text-danger">
                <ErrorMessage name="description" />
              </span>
            </div>

            <div className="col-12 col-lg-6 mb-2">
              <label htmlFor="level" className="form-label">
                Prioridad
              </label>
              <Field as="select" name="level" className="form-select">
                <option value="" className="text-center">
                  -- selecciona una prioridad --
                </option>
                <option value={LEVELS.NORMAL} className="badge bg-info">
                  {LEVELS.NORMAL}
                </option>
                <option value={LEVELS.URGENT} className="badge bg-warning">
                  {LEVELS.URGENT}
                </option>
                <option value={LEVELS.BLOCKING} className="badge bg-danger">
                  {LEVELS.BLOCKING}
                </option>
              </Field>
              <span className="text-danger">
                <ErrorMessage name="level" />
              </span>
            </div>

            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
