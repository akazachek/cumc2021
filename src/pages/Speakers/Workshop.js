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
              <Translator page="workshop" text="workshopHeader" />
            </h2>

            <p style={{ textAlign: "left" }}>
              <Translator page="workshop" text="workshopInfo" />
            </p>
            <p style={{ textAlign: "left" }}>
              <Translator page="workshop" text="workshopContact" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workshop;
