import React from "react";
import { Card, Container, Header, Icon, Image } from "semantic-ui-react";
import "./index.css";

const materialSpec = require("./images/materialspec.png");
const materiallink = "";

const white = require("./images/white.png");
const hack6 = require("./images/hack6.png");
const taplink = "https://github.com/Jamar-Mitchell/TapAttend";

const oxfordhack = require("./images/oxfordhack.jpg");
const barolink = "https://devpost.com/software/baro-hnrm3a";

const elevatehack = require("./images/elevatehack.png");
const cooklink = "https://github.com/Jamar-Mitchell/CookHelper";

const ezsponsor = require("./images/ezsponsorlogo.jpg");
const ezlink = "https://github.com/Jamar-Mitchell/EZSponsor";

const Activities = () => (
  <div>
    <div className="content" id="Activities">
      <Container style={{ "padding-top": "100px", paddingBottom: "20px" }}>
        <Header
          className="header"
          style={{
            "font-size": "40px",
            "font-family": "Montserrat",
            "padding-bottom": "20px",
            color: "#006E6D"
          }}
        >
          Hackathons
        </Header>
      </Container>
      <Container style={{ height: "400px", width: "800px" }}>
        <Card.Group centered itemsPerRow={3} className="cardfont">
          <Card
            raised
            className="moreShadow"
            href={materiallink}
            target="_blank"
          >
            <Image src={hack6} wrapped ui={false} />
            <Card.Content extra style={{ fontSize: "18px" }}>
              Hack the 6ix 2019
            </Card.Content>
          </Card>

          <Card raised className="moreShadow" href={oxfordhack} target="_blank">
            <Image src={oxfordhack} wrapped ui={false} />
            <Card.Content extra style={{ fontSize: "18px" }}>
              Oxford Global Hackathon 2019
            </Card.Content>
          </Card>

          <Card
            raised
            className="moreShadow"
            href={materiallink}
            target="_blank"
          >
            <Image src={elevatehack} wrapped ui={false} />
            <Card.Content extra style={{ fontSize: "18px" }}>
              Elevate Tech Jam 2019
            </Card.Content>
          </Card>
        </Card.Group>
      </Container>
    </div>
  </div>
);

export default Activities;
