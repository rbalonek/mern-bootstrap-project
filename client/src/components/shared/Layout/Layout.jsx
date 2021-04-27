import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../Nav/NavBar";

export default function Layout(props) {
  return (
    <div>
      <NavBar />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
}
