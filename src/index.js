import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Header";
import Projects from "./Project.js";
import Particle from "./particles";
import About from "./About";
import "bootstrap/dist/css/bootstrap.min.css";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Particle />, document.getElementById("Particles"));

ReactDOM.render(<Header />, document.getElementById("Header"));

ReactDOM.render(<About />, document.getElementById("About"));

ReactDOM.render(<Projects />, document.getElementById("Portfolio"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
