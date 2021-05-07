import React from "react";
import Translator from "../../components/locale/Translator";
import MobileDetector from "../../components/MobileDetector";

import generic from "../../media/generic1.png";
import madhu from "../../media/madhu.jpg";

function Keynotes() {
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
              <Translator page="keynotes" text="jakeInfo" />
            </h2>
            <h3 className="speakerInst">
              <Translator page="keynotes" text="jakeInst" />
            </h3>
            <h3 style={{ textAlign: "left" }}>
              <Translator page="keynotes" text="jakeTalk" />
            </h3>
            <p style={{ textAlign: "left" }}>
              <Translator page="keynotes" text="jakeAbstract" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Keynotes;
