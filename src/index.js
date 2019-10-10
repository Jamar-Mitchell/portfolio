import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Header";
import Projects from "./Project.js";
import Particle from "./particles";
import NavbarJS from "./NavbarJS";
import Activities from "./Activities";
import About from "./About";
import "bootstrap/dist/css/bootstrap.min.css";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<NavbarJS />, document.getElementById("NavbarJS"));

ReactDOM.render(<Particle />, document.getElementById("Particles"));

ReactDOM.render(<Header />, document.getElementById("Header"));

ReactDOM.render(<About />, document.getElementById("About"));

ReactDOM.render(<Projects />, document.getElementById("Portfolio"));

ReactDOM.render(<Activities />, document.getElementById("Activities"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
