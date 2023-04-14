import React, {  useContext } from "react";
import {
  Container,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Menu } from "../pure/menu/Menu";
import { AuthContext } from "../../hooks/ContextLogin";

export const Header = () => {
  const { authState } = useContext(AuthContext);

  return (
    <Navbar key="sm" bg="dark" expand="sm" variant="dark" className="mb-3">
      <Container fluid>
        <Link to="/" className="navbar-brand">
          Task
        </Link>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
        {authState.email != "" &&  <Menu />}
      </Container>
    </Navbar>
  );
};
