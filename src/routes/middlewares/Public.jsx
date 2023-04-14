import React from "react";
import { Navigate } from "react-router-dom";

const Public = ({ children }) => {
  const isLoggedIn = localStorage.getItem("credentials");

  if (isLoggedIn) {
    return <Navigate to={`/`} />;
  }

  return children;
};

export default Public;