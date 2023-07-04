import React from "react";
import { LoginFormik } from "../../components/pure/forms/LoginFormik";
import { Link } from "react-router-dom";

const LoginPage = () => {
  

  return (
    <div className="containter p-5">
      <h1 className="text-center fw-bold">Login Page</h1>
      <LoginFormik />
      <div className="text-center my-4">
        <Link to="/register">No Tienes Cuenta Registrate</Link>
      </div>
    </div>
  );
};

export default LoginPage;
