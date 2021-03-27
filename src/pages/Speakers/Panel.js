import React, { Component } from "react";
import Translator from "../../components/Translator";

import jeff from "../../media/jeff.jpg";
import tim from "../../media/tim.jpg"

class Panel extends Component {
  render() {
    return (
      <div className = "centrefold">
        <div className = "tableVert">
          <div className = "tableHoriz centreVert speaker">
            <img src={jeff} className = "roundedImg" />
            <div>
              <h2 style={{textAlign: "left"}}>
                <Translator page = "panel" text = "jeffInfo" />
              </h2>
              <h3 style={{textAlign: "left"}}>
                <Translator page = "panel" text = "jeffTalk" />
              </h3>
              <p style={{textAlign: "left"}}>
                <Translator page = "panel" text = "jeffAbstract" />
              </p>
            </div>
          </div>
          <div className = "tableHoriz centreVert speaker">
            <img src={tim} className = "roundedImg" />
            <div>
              <h2 style={{textAlign: "left"}}>
                <Translator page = "panel" text = "timInfo" />
              </h2>
              <h3 style={{textAlign: "left"}}>
                <Translator page = "panel" text = "timTalk" />
              </h3>
              <p style={{textAlign: "left"}}>
                <Translator page = "panel" text = "timAbstract" />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Panel;
