import React from "react";
import { Container, Nav, Navbar, Badge, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

function Header({ cartCount = 0, onCartClick }) {
  return (
    <Navbar expand="lg" bg="light" variant="light" sticky="top" className="shadow-sm mb-4 py-2">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center gap-2 font-weight-bold">
          <img
            src="/Images/logo.jpg"
            alt="Logo"
            height="40"
            className="d-inline-block align-top rounded"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <span className="fw-bold text-dark fs-4">FASHION STORE</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-lg-4 fw-semibold">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#men">Men</Nav.Link>
            <Nav.Link href="#women">Women</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center mt-2 mt-lg-0">
            <Button
              variant="outline-primary"
              onClick={onCartClick}
              className="position-relative d-flex align-items-center gap-2 px-3 py-2 rounded-pill"
            >
              <FaShoppingCart size={18} />
              <span>Giỏ hàng</span>
              {cartCount > 0 && (
                <Badge bg="danger" pill className="ms-1">
                  {cartCount}
                </Badge>
              )}
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
