import React, { Component } from "react";
import Translator from "../../components/Translator";

import jake from "../../media/jake.jpg";
import madhu from "../../media/madhu.jpg";

class Keynotes extends Component {
  render() {
    return (
      <div className = "centrefold">
        <div className = "tableVert">
          <div className = "tableHoriz centreVert speaker">
            <img src={jake} className = "roundedImg" />
            <div>
              <h2 style={{textAlign: "left"}}>
                <Translator page = "keynotes" text = "jakeInfo" />
              </h2>
              <h3 style={{textAlign: "left"}}>
                <Translator page = "keynotes" text = "jakeTalk" />
              </h3>
              <p style={{textAlign: "left"}}>
                <Translator page = "keynotes" text = "jakeAbstract" />
              </p>
            </div>
          </div>
          <div className = "tableHoriz centreVert speaker">
            <img src={madhu} className = "roundedImg" />
            <div>
              <h2 style={{textAlign: "left"}}>
                <Translator page = "keynotes" text = "madhuInfo" />
              </h2>
              <h3 style={{textAlign: "left"}}>
                <Translator page = "keynotes" text = "madhuTalk" />
              </h3>
              <p style={{textAlign: "left"}}>
                <Translator page = "keynotes" text = "madhuAbstract" />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Keynotes;
