import React from "react";
import { Card, Container, Header } from "semantic-ui-react";
import "./index.css";

const materialSpec = require("./images/materialspec.png");
const materiallink = "";

const white = require("./images/white.png");
const tapattend = require("./images/tapattend.jpg");
const taplink = "https://github.com/Jamar-Mitchell/TapAttend";

const baro = require("./images/baro.jpg");
const barolink = "https://devpost.com/software/baro-hnrm3a";

const cookhelper = require("./images/cookhelper.jpg");
const cooklink = "https://github.com/Jamar-Mitchell/CookHelper";

const ezsponsor = require("./images/ezsponsorlogo.jpg");
const ezlink = "https://github.com/Jamar-Mitchell/EZSponsor";

const Projects = () => (
  <div>
    <div className="content" id="Projects">
      <Container style={{ "padding-bottom": "20px" }}>
        <Header
          className="header"
          style={{
            "font-size": "50px",
            "font-family": "Montserrat",
            "padding-bottom": "20px",
            color: "#006E6D"
          }}
        >
          Projects
        </Header>
      </Container>
      <Container>
        <Card.Group centered itemsPerRow={3} className="cardfont">
          <Card raised image={tapattend} href={taplink} target="_blank" />
          <Card
            raised
            image={materialSpec}
            className="moreShadow"
            href={materiallink}
            target="_blank"
          />
          <Card
            raised
            image={baro}
            className="moreShadow"
            href={barolink}
            target="_blank"
          />
          <Card
            raised
            image={cookhelper}
            className="moreShadow"
            href={cooklink}
            target="_blank"
          />
          <Card
            raised
            image={ezsponsor}
            className="moreShadow"
            href={ezlink}
            target="_blank"
          />
        </Card.Group>
      </Container>
    </div>
  </div>
);

export default Projects;
