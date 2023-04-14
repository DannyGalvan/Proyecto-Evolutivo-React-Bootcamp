import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../../../hooks/ContextLogin";

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
  const { signIn } = useContext(AuthContext);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          signIn(values);
          const page = navigation.currentEntry.index;
          //page != 0 ? -1 : '/'
          navigate("/?online=true", {
            replace: false,
            state: {
              online: true,
            },
          });
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

          <div className="d-flex justify-content-center">
            <button type="submit">Iniciar Sesion</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
