import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
};
 
const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Correo Invalido")
    .required("El campo 'correo' no puede ser vacio"),
  password: Yup.string()
    .required("El campo 'contraseña' no puede ser vacio")
    .min(6,"la contraseña debe tener minimo 6 caracteres"),
});

export const LoginFormik = () => {
  return (
    <div>
      <h4 className="text-center">Login Con Formik</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className="container">
          <div className="mb-2">
            <label htmlFor="email" className="form-label">
              Correo
            </label>
            <Field name="email" type="text" className="form-control" />
            <span className="text-danger">
              <ErrorMessage name="email" />
            </span>
          </div>

          <div className="mb-2">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <Field name="password" type="password" className="form-control" />
            <span className="text-danger">
              <ErrorMessage name="password" />
            </span>
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
