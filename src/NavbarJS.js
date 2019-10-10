import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import {} from "@fortawesome/free-solid-svg-icons";

import "./index.css";

function NavbarJS() {
  return (
    <Navbar
      sticky="top"
      position="fixed"
      variant="light"
      style={{
        visibility: "hidden",
        animation: "slideInDown 1.2s",
        animationFillMode: "forwards",
        animationDelay: "3s",
        backgroundColor: "rgb(255,255,255,.75)",
        width: "100%"
      }}
    >
      <Navbar.Brand
        href="#home"
        style={{ color: "#006e6d", fontSize: "20px", fontWeight: "20px" }}
      ></Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link
          href="#About"
          style={{ color: "#006e6d", fontSize: "20px", fontWeight: "20px" }}
        >
          About
        </Nav.Link>
        <Nav.Link
          href="#Projects"
          style={{ color: "#006e6d", fontSize: "20px", fontWeight: "20px" }}
        >
          Projects
        </Nav.Link>
        <Nav.Link
          href="#Resume"
          style={{ color: "#006e6d", fontSize: "20px", fontWeight: "20px" }}
        >
          Resume
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavbarJS;
