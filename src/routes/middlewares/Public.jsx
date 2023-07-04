import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../hooks/ContextLogin";

const Public = ({ children }) => {
  const { state } = useContext(AuthContext);

  if (state.isLoggedIn) {
    return <Navigate to={`/`} />;
  }

  return children;
};

export default Public;
