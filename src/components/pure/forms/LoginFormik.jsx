import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../../../hooks/ContextLogin";
import { login } from "../../../services/CrudService";
import { reqrest } from "../../../axios/config";
import { Spinner } from "../Spinner";

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
    .min(6, "la contraseña debe tener minimo 6 caracteres"),
});

export const LoginFormik = () => {
  const navigate = useNavigate();
  const { signIn, loading, errorAuth, state } = useContext(AuthContext);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          loading();
          await new Promise((r) => setTimeout(r, 500));
          const response = await login(values.email, values.password);
          if (response.token) {
            reqrest.defaults.auth = response.token;
            const temp = {
              ...values,
              token: response.token,
            };
            signIn(values);
            const page = window.navigation.currentEntry.index;
            navigate(page != 0 ? -1 : "/");
          } else {
            errorAuth(response.error);
          }
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

          <span className="text-danger">
            {state.error != "" && state.error}
          </span>
          
          {
            state.isLoading && <Spinner />
          }

          <div className="d-flex justify-content-center">
            <button type="submit">Iniciar Sesion</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
