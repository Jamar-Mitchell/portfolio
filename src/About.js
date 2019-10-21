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
import "./animate.css";

const jamar = require("./images/me.png");
function About() {
  return (
    <div
      className="content"
      style={{ paddingBottom: "200px", paddingTop: "100px" }}
    >
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
              <p className="text ">
                <mark style={{ backgroundColor: "#74dfdd0", color: "#006E6D" }}>
                  I have a passion for all things tech and coding.
                </mark>
                I have also always had an interest in art, design and
                technology. To be able to combine two things that I love ,
                coding and art sold me on Frontend development!
                <br />
                <br />
                On my spare time when I'm not coding, I enjoy listening to,
                playing and sometimes making music! I also love to do graphic
                design, draw and paint whenever I am free.
                <br /> <br /> Solving new challenging problems, learning and
                growing as both a coder and a young professional is what
                motivates me every morning. I want to be able to work on
                projects that could impact and improve our daily lives. To be
                able to make a real change in the world with just code is truly
                inspiring to me and I cant wait to be apart of it.
                <br />
                <br />
                Oh, and if you couldn't tell, my favorite color is
                <b> Green!</b>
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
