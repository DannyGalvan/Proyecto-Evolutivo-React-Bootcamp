import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="container-fluid">
      <h1 className="text-center fw-bold">404 - Pagina No Encontrada</h1>
      <h2 className="text-center">
        <Link to={"/"}>Regresar al Home</Link>
      </h2>
    </div>
  );
};

export default NotFoundPage;
