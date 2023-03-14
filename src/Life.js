import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Tabs from "./Tabs";

function Life() {
  return (
    <>
    <Navbar  expand="lg">
      <Navbar.Brand href="/">
        <img src="https://dat.ae/wp-content/uploads/2022/02/DAT.png" alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav style={{marginLeft:'auto',marginRight:'50px',marginTop:'60px',borderTop:'5px solid grey'}}>
          <Nav.Link href="/">ABOUT US</Nav.Link>
          <Nav.Link href="/about">NOOR TAKAFUL</Nav.Link>
          <Nav.Link href="/contact" style={{background:'#9e3223',color:'white'}}>CALCULATOR</Nav.Link>
          <Nav.Link href="/contact">INVESTOR</Nav.Link>
          <Nav.Link href="/contact">CONTACT</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Tabs />
    </>
  );
}

export default Life;
