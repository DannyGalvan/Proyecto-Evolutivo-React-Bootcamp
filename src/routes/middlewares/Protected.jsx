import React from "react";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const isLoggedIn = localStorage.getItem("credentials");

  if (!isLoggedIn) {
    return <Navigate to={`/login`} />;
  }

  return children;
};

export default Protected;