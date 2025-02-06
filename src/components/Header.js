import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import HeaderText from "./HeaderText";
import { Link,useLocation } from "react-router-dom";
import CartContext from "../store/cart-context";
function Header({onOpen}) {
  const cartCtx=useContext(CartContext);
  const location = useLocation(); // Get the current path

  return (
    <>
    
    <Navbar variant="dark" fixed="top" className="bg-dark" >
        <Container className="w-25">
          <Nav>

            <Nav.Link as={Link} to={'/'} variant="light" className={` rounded px-3 ${location.pathname === "/" ? "text-white" : "text-secondary"}`}>Home</Nav.Link>
            <Nav.Link as={Link} to={'/store'} variant="light"  className={` rounded px-3 ${location.pathname === "/store" ? "text-white" : "text-secondary"}`}>Store</Nav.Link>
            <Nav.Link as={Link} to={'/about'} variant="light"  className={` rounded px-3 ${location.pathname === "/about" ? "text-white" : "text-secondary"}`}>About</Nav.Link>
            <Nav.Link as={Link} to={'/contact-us'} variant="light"  className={` rounded px-3 ${location.pathname === "/contact-us" ? "text-white" : "text-secondary"}`}>Contact Us</Nav.Link>
          </Nav>

        </Container>

        <Button variant="outline-light" className="border border-info rounded" onClick={onOpen}>
          🛒 Cart <span className="ms-1">{cartCtx.items.length}</span>
        </Button>
            
    </Navbar>
    <HeaderText/>
    </>
  )
}

export default Header