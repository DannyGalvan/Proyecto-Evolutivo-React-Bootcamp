import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Copyright } from "../../components/pure/Copyright";
import { AuthContext } from "../../hooks/ContextLogin";
import { Carrousel } from "../../components/pure/Carrousel";

const DasboardPage = () => {
  const navigate = useNavigate();
  const { logout, state } = useContext(AuthContext);

  const Close = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="container">
      <h1 className="text-center fw-bold my-5">Deseas Salir De La App?</h1>
      <h2>Usuario Actual: </h2>
      <p> {JSON.stringify(state, null, 3)} </p>
      <Carrousel />
      <div className="col d-flex justify-content-center my-5">
        <Button variant="primary" onClick={Close}>
          <i className="bi bi-x-octagon-fill text-danger"></i> Cerrar Sesión
        </Button>
      </div>
      <Copyright />
    </div>
  );
};

export default DasboardPage;
