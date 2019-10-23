import React from "react";
import { Card, Container, Header } from "semantic-ui-react";
import "./index.css";

const materialSpec = require("./images/materialspec.png");
const materiallink = "https://github.com/Jamar-Mitchell/materialspecs";

const white = require("./images/white.png");
const tapattend = require("./images/tapattend.jpg");
const tapattendInvert = require("./images/tapattendInvert.jpg");
const taplink = "https://github.com/Jamar-Mitchell/TapAttend";

const baro = require("./images/baro.jpg");
const baroInvert = require("./images/baroInvert.jpg");
const barolink = "https://devpost.com/software/baro-hnrm3a";

const cookhelper = require("./images/cookhelper.jpg");
const cooklink = "https://github.com/Jamar-Mitchell/CookHelper";

const ezsponsor = require("./images/ezsponsorlogo.jpg");
const ezlink = "https://github.com/Jamar-Mitchell/EZSponsor";

function Projects() {
  return (
    <div className="content">
      <Container>
        <Header
          id="Projects"
          className="header"
          style={{
            "font-size": "2em",
            "font-family": "Montserrat",
            "padding-bottom": "20px",
            color: "#006E6D"
          }}
        >
          Projects
        </Header>
      </Container>
      <Container style={{ width: "35rem" }}>
        <Card.Group centered itemsPerRow={3} className="cardfont">
          <Card raised image={tapattendInvert} href={taplink} target="_blank" />

          <Card
            raised
            image={baroInvert}
            className="moreShadow"
            href={barolink}
            target="_blank"
          />

          <Card
            raised
            image={ezsponsor}
            className="moreShadow"
            href={ezlink}
            target="_blank"
          />

          <Card
            raised
            image={materialSpec}
            className="moreShadow"
            href={materiallink}
            target="_blank"
          />

          <Card
            raised
            image={cookhelper}
            className="moreShadow"
            href={cooklink}
            target="_blank"
          />
        </Card.Group>
      </Container>
    </div>
  );
}

export default Projects;
