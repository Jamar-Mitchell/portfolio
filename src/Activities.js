import React from "react";
import { Card, Container, Header, Icon, Image } from "semantic-ui-react";
import "./index.css";

const hack6 = require("./images/hack6.png");
const hack6link = "";

const oxfordhack = require("./images/oxfordhack.jpg");
const oxfordhacklink = "";

const elevatehack = require("./images/elevatehack.png");
const elevatehacklink = "";

const Activities = () => (
  <div>
    <div className="content page" id="Hackathons">
      <Container>
        <Header
          className="header"
          style={{
            "font-size": "2em",
            "font-family": "Montserrat",
            "padding-bottom": "20px",
            color: "#006E6D"
          }}
        >
          Hackathons
        </Header>
      </Container>
      <Container style={{ width: "35rem" }}>
        <Card.Group centered itemsPerRow={3} className="cardfont">
          <Card raised className="moreShadow" href={hack6link} target="_blank">
            <Image src={hack6} wrapped ui={false} />
            <Card.Content extra style={{ fontSize: ".85rem" }}>
              Hack the 6ix 2019
            </Card.Content>
          </Card>

          <Card
            raised
            className="moreShadow"
            href={oxfordhacklink}
            target="_blank"
          >
            <Image src={oxfordhack} wrapped ui={false} />
            <Card.Content extra style={{ fontSize: ".85rem" }}>
              Oxford Global Hackathon 2019
            </Card.Content>
          </Card>

          <Card
            raised
            className="moreShadow"
            href={elevatehacklink}
            target="_blank"
          >
            <Image src={elevatehack} wrapped ui={false} />
            <Card.Content extra style={{ fontSize: ".85rem" }}>
              Elevate Tech Jam 2019
            </Card.Content>
          </Card>
        </Card.Group>
      </Container>
    </div>
  </div>
);

export default Activities;
