import React from "react";

const Footer = () => (
  <footer style={{ position: "fixed", bottom: "0" }}>
    <nav className="navbar navbar-dark bg-dark vw-100 p-1">
      <div className=" w-100 d-flex justify-content-center">
        <p className=" text-secondary font-weight-light mt-3">
          Created by : Robert Balonek for a MERN / Bootstrap exercise{" "}
        </p>
      </div>
    </nav>
  </footer>
);

export default Footer;
