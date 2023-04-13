import React from "react";
import { User } from "../../../models/user.class";
import { Form, Field, ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import { ROLES } from "../../../models/roles.enum";

const initialValues = {
  userName: "",
  email: "",
  password: "",
  confirm: "",
  role: ROLES.USER,
};

const registerSchema = Yup.object().shape({
  userName: Yup.string()
    .min(6, "nombre de usuario muy corto")
    .max(12, "nombre de usuario muy largo")
    .required("el nombre de usuario es obligatorio"),
  password: Yup.string()
    .required("El campo 'contraseña' no puede ser vacio")
    .min(8, "la contraseña debe tener minimo 8 caracteres"),
  confirm: Yup.string()
    .when("password", {
        is: true,
        then: Yup.string().oneOf(
            [Yup.ref("password")],
            "no coinciden"
        )
    })
    .required("debes confirmar tu contraseña"),
  email: Yup.string()
    .email("Ingresa un correo valido")
    .required("El correo es obligatorio"),
});

export const RegisterFormik = () => {
  const user = new User();

  const submit = async (values) => {
    await new Promise((r) => setTimeout(r, 500));
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div className="container-fluid">
      <h4>Formik</h4>
      <Formik
        initialValues={initialValues}
        onSubmit={submit}
        validationSchema={registerSchema}
      >
        <Form>
          <div className="mb-2">
            <label htmlFor="userName" className="form-label">
              Nombre de usuario
            </label>
            <Field name="userName" type="text" className="form-control" />
            <span className="text-danger">
              <ErrorMessage name="userName" />
            </span>
          </div>

          <div className="mb-2">
            <label htmlFor="email" className="form-label">
              Correo
            </label>
            <Field name="email" type="email" className="form-control" />
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

          <div className="mb-2">
            <label htmlFor="confirm" className="form-label">
              Confirmar contraseña
            </label>
            <Field name="confirm" type="password" className="form-control" />
            <span className="text-danger">
              <ErrorMessage name="confirm" />
            </span>
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
