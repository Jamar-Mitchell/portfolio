import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faBehance
} from "@fortawesome/free-brands-svg-icons";
import "./index.css";

function Header() {
  return (
    <div className="content x">
      <Container style={{ padding: "200px", width: "100%", height: "1000px" }}>
        <h1 className="title">
          Hey! <br /> I'm Jamar :)
        </h1>
        <p className="subheader">
          I'm a Computer Engineering graduate and an aspiring Full Stack
          Developer
        </p>
        <div
          style={{ paddingBottom: "200px", display: "block", float: "left" }}
        >
          <a
            href="https://www.linkedin.com/in/jamar-mitchell-456b18b5/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{
                fontSize: "70px",
                color: "#006e6d",
                paddingRight: "20px"
              }}
            />
          </a>

          <a href="https://github.com/Jamar-Mitchell" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              style={{
                fontSize: "70px",
                color: "#006e6d",
                paddingRight: "20px"
              }}
            />
          </a>

          <a href="https://www.behance.net/jamarmitchell" target="_blank">
            <FontAwesomeIcon
              icon={faBehance}
              style={{
                fontSize: "70px",
                color: "#006e6d",
                paddingRight: "20px"
              }}
            />
          </a>
        </div>
      </Container>
    </div>
  );
}

export default Header;
