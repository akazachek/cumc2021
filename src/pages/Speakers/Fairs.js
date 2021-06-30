import React from "react";
import Translator from "../../components/locale/Translator";
import MobileDetector from "../../components/MobileDetector";

import grad from "../../media/grad.jpg";

function Fairs() {
  const isMobile = MobileDetector();
  const containerClass =
    "centreVert speaker " + (isMobile ? null : "tableHoriz");
  return (
    <div className="centrefold">
      <div className="tableVert">
        <div className={containerClass}>
          <img src={grad} className="roundedImg" />
          <div>
            <h2 className="speakerName">
              <Translator page="fairs" text="gradHeader" />
            </h2>
            <p style={{ textAlign: "left" }}>
              <Translator page="fairs" text="gradBody" />
            </p>
            <p style={{ textAlign: "left" }}>
              <Translator page="fairs" text="gradComing" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fairs;
