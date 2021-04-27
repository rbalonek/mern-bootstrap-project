import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Nav, Navbar, Button, FormControl, Form } from "react-bootstrap";

const NavBar = () => {
  return (
    <div class="sticky-top ">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav className="mr-auto  ">
          <Nav.Link href="/products">All Products</Nav.Link>
          <Nav.Link href="/add-product">Add Product</Nav.Link>
        </Nav>
        <Form inline></Form>
      </Navbar>
    </div>
  );
};

export default NavBar;
// <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//         <Button variant="outline-info">Search</Button>
