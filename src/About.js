import React from "react";
import { Container, Card, Row, Col, Image } from "react-bootstrap";
import { Header } from "semantic-ui-react";
import Jamar from "./Jamar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faBehance
} from "@fortawesome/free-brands-svg-icons";
import "./index.css";

const jamar = require("./images/me.png");
function About() {
  return (
    <div className="content" style={{ paddingBottom: "200px" }}>
      <Container style={{ "padding-bottom": "20px" }}>
        <Header
          id="About"
          className="header"
          style={{
            "font-size": "40px",
            "font-family": "Montserrat",
            "padding-bottom": "20px",
            color: "#006E6D"
          }}
        >
          About Me
        </Header>
      </Container>
      <Container>
        <Row>
          <Col md={8}>
            <Container>
              <p className="text">
                <mark style={{ backgroundColor: "#74dfdd0", color: "white" }}>
                  I have a passion for all things tech and coding.
                </mark>
                I have always had an interest in art, design and technology
                which sold me on Frontend development!
                <br /> <br /> Solving new challenging problems, learning and
                growing as both a coder a human is what motivates me every
                morning.
              </p>
            </Container>
          </Col>
          <Col>
            <Container>
              <Jamar />
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
