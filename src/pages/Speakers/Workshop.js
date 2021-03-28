import React, { Component } from "react";
import Translator from "../../components/locale/Translator";

import yashan from "../../media/yashan.jpg";

class Workshop extends Component {
  render() {
    return (
      <div className="centrefold">
        <div className="tableVert">
          <div className="tableHoriz centreVert speaker">
            <img src={yashan} className="roundedImg" />
            <div>
              <h2 className="speakerName">
                <Translator page="workshop" text="yashanInfo" />
              </h2>
              <h3 className="speakerInst">
                <Translator page="workshop" text="yashanInst" />
              </h3>
              <h3 style={{ textAlign: "left" }}>
                <Translator page="workshop" text="yashanTalk" />
              </h3>
              <p style={{ textAlign: "left" }}>
                <Translator page="workshop" text="yashanAbstract" />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Workshop;
