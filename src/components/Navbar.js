import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container fluid className="px-lg-5">
        <Navbar.Brand href="#home">Store</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/" className="px-4">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/add" className="px-4">
            Add product
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
