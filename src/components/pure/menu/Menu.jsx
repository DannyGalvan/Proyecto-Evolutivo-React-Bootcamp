import React, { useContext } from "react";
import { Nav, NavDropdown, Offcanvas, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../hooks/ContextLogin";

export const Menu = () => {
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);

    const close = () => {
      logout();
      navigate("/login");
    };

  return (
    <Navbar.Offcanvas
      id={`offcanvasNavbar-expand-sm`}
      aria-labelledby={`offcanvasNavbarLabel-expand-sm}`}
      placement="end"
      className="text-dark"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
          Task
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="task" className="nav-link">
            Tareas
          </Link>
          <Link to="Dashboard" className="nav-link">
            Dasboard
          </Link>
          <NavDropdown
            title="Menú"
            id={`offcanvasNavbarDropdown-expand-sm`}
            align={{ sm: "end" }}
            menuVariant="dark"
          >
            <Link className="dropdown-item" data-rr-ui-dropdown-item to="/">
              Home
            </Link>
            <Link
              className="dropdown-item"
              data-rr-ui-dropdown-item
              to="Dashboard"
            >
              Dashboard
            </Link>
            <Link className="dropdown-item" data-rr-ui-dropdown-item to="task">
              Tareas
            </Link>
            <NavDropdown.Divider />
            <Link
              className="dropdown-item"
              data-rr-ui-dropdown-item
              to="profile"
            >
              Perfil
            </Link>
            <NavDropdown.Item href="#" onClick={close}>
              <i className="bi bi-x-octagon-fill text-danger"></i> Cerrar Sesion
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  );
};

