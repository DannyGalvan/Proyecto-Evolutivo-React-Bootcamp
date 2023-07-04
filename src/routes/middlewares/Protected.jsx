import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../hooks/ContextLogin";

const Protected = ({ children }) => {
  const { state } = useContext(AuthContext);

  if (!state.isLoggedIn) {
    return <Navigate to={`/login`} />;
  }

  return children;
};

export default Protected;
