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
import "./animate.css";

function Header() {
  return (
    <div className="content x">
      <Container
        style={{
          paddingLeft: "200px",
          paddingRight: "200px",
          paddingTop: "125px",
          width: "100%",
          height: "800px"
        }}
      >
        <h1
          className="title "
          style={{
            animation: "slideInDown 1.2s",
            animationFillMode: "forwards"
          }}
        >
          Hey! <br /> I'm Jamar :)
        </h1>
        <p
          className="subheader"
          style={{
            visibility: "hidden",
            animation: "slideInLeft 1.2s",
            animationFillMode: "forwards",
            animationDelay: "1s"
          }}
        >
          I'm a Computer Engineering graduate and an aspiring Full Stack
          Developer
        </p>
        <div
          className="pulse"
          style={{
            visibility: "hidden",
            paddingBottom: "200px",
            display: "block",
            float: "left",
            animation: "slideInUp 1.2s",
            animationFillMode: "forwards",
            animationDelay: "2s"
          }}
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
