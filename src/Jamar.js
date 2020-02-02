import React from "react";

import "./jamar.css";

import $ from "jQuery";

function Jamar() {
  return (
    <div>
      <div
        className="scaled"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <div className="jcontainer">
          <div className="person" id="jamar">
            <div className="tshirt">
              <h1 className="j" style={{ paddingTop: "25px" }}>
                {" "}
                I ♥ Code
              </h1>
            </div>
            <div className="leftear"></div>
            <div className="rightear"></div>
            <div className="earring"></div>
            <div className="earring2"></div>
            <div className="hair"></div>
            <div className="hair2"></div>
            <div className="hair3"></div>
            <div className="hair4"></div>
            <div className="hair5"></div>
            <div className="hair6"></div>
            <div className="hair7"></div>
            <div className="hair8"></div>
            <div className="neck"></div>
            <div className="face">
              <div class="eye">
                <div class="pupil"></div>
              </div>
              <div class="eye2">
                <div class="pupil"></div>
              </div>
              <div className="nose"> </div>
              <div className="mouth"> </div>
              <div className="tounge"> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jamar;
