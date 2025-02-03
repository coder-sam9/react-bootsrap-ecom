import React from "react";
import { Button, Card, Container, Nav, Navbar } from "react-bootstrap";
function Header() {
  return (
    <Navbar variant="dark" fixed="top" className="bg-dark border border-bottom light" >
        <Container className="w-25">
            <Nav.Link variant="light" className=" text-white rounded px-3">Home</Nav.Link>
            <Nav.Link variant="light"  className=" text-white rounded px-3">Store</Nav.Link>
            <Nav.Link variant="light"  className=" text-white rounded px-3">About</Nav.Link>

        </Container>

        <Button variant="outline-light" className="border border-info rounded">
          🛒 Cart <span className="ms-1">0</span>
        </Button>
            
    </Navbar>
  )
}

export default Header