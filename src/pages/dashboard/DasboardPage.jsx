import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Copyright } from "../../components/pure/Copyright";

const DasboardPage = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/login");
    localStorage.clear();
  };

  return (
    <div className="container">
     <div className="col d-flex justify-content-center">
      <Button variant="primary" onClick={logout}>
        Logout
      </Button>     
     </div>
     <Copyright />
    </div>
  );
};

export default DasboardPage;
