import React from "react";
import Translator from "../../components/locale/Translator";
import MobileDetector from "../../components/MobileDetector";

import generic from "../../media/generic2.png";
import tim from "../../media/tim.jpg";

function Panel() {
  const isMobile = MobileDetector();
  const containerClass =
    "centreVert speaker " + (isMobile ? null : "tableHoriz");
  return (
    <div className="centrefold">
      <div className="tableVert">
        <div className={containerClass}>
          <img src={generic} className="roundedImg" />
          <div>
            <h2 className="speakerName">
              <Translator page="panel" text="jeffInfo" />
            </h2>
            <h3 className="speakerInst">
              <Translator page="panel" text="jeffInst" />
            </h3>
            <h3 style={{ textAlign: "left" }}>
              <Translator page="panel" text="jeffTalk" />
            </h3>
            <p style={{ textAlign: "left" }}>
              <Translator page="panel" text="jeffAbstract" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Panel;
