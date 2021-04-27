import React, { useState } from "react";
import { Nav, Navbar, Button } from "react-bootstrap";

const NavBar = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //console.log("Logged in? ", isLoggedIn);

  return (
    <div className="sticky-top ">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Home</Navbar.Brand>

        <Nav className="mr-auto">
          <Nav.Link href="/products">All Products</Nav.Link>
          {isLoggedIn ? (
            <>
              <Nav.Link className="float-right" href="/add-product">
                Add Product
              </Nav.Link>
              <Button
                className="btn btn-dark btn-outline-danger"
                onClick={() => setIsLoggedIn(false)}
              >
                Logout
              </Button>
            </>
          ) : (
            <Button onClick={() => setIsLoggedIn(true)}>Login</Button>
          )}
        </Nav>
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
