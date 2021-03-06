import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../Nav/NavBar";

export default function Layout(props) {
  return (
    <div>
      <NavBar
        isLoggedIn={props.isLoggedIn}
        handleChangeLogout={props.handleChangeLogout}
        handleChangeLogin={props.handleChangeLogin}
      />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
}
