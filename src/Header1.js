import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="Header ">
      <nav class="navbar noback navbar-expand-lg fixed-top navbar-light ">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <header className="header inner jumbotron padding">
        <h1 class="display-4 intro">Jamar Mitchell</h1>
        <p class="lead">
          {" "}
          Learning, overcoming challenges and solving new problems motivates me.{" "}
        </p>
      </header>
    </div>
  );
}

export default Header;
