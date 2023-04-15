import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Copyright } from "../../components/pure/Copyright";
import { AuthContext } from "../../hooks/ContextLogin";

const DasboardPage = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const Close = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="col d-flex justify-content-center">
        <Button variant="primary" onClick={Close}>
          <i className="bi bi-x-octagon-fill text-danger"></i> Cerrar Sesión
        </Button>
      </div>
      <Copyright />
    </div>
  );
};

export default DasboardPage;
