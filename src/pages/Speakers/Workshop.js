import React from "react";
import Translator from "../../components/locale/Translator";
import MobileDetector from "../../components/MobileDetector";

import generic from "../../media/generic3.png";

function Workshop() {
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

export default Workshop;
