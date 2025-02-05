import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import HeaderText from "./HeaderText";
import { Link } from "react-router-dom";
import CartContext from "../store/cart-context";
function Header({onOpen}) {
  const cartCtx=useContext(CartContext);
  return (
    <>
    
    <Navbar variant="dark" fixed="top" className="bg-dark" >
        <Container className="w-25">
            <Nav.Link as={Link} to={'/'} variant="light" className=" text-white rounded px-3">Home</Nav.Link>
            <Nav.Link as={Link} to={'/store'} variant="light"  className=" text-white rounded px-3">Store</Nav.Link>
            <Nav.Link as={Link} to={'/about'} variant="light"  className=" text-white rounded px-3">About</Nav.Link>

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