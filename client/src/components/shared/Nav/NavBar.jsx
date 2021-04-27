import React from "react";
import { Nav, Navbar, Form } from "react-bootstrap";

const NavBar = ({ handleChangeLogin, handleChangeLogout, isLoggedIn }) => {
  //console.log("Logged in? ", isLoggedIn);
  return (
    <div className="sticky-top ">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav className="mr-auto">
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

// {isLoggedIn === true ? (
//   <Button onClick={handleChangeLogout}>Logout</Button>
// ) : (
//   <Button onClick={handleChangeLogin}>Login</Button>
// )}
