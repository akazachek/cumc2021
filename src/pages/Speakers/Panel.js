import React from "react";
import Translator from "../../components/locale/Translator";
import MobileDetector from "../../components/MobileDetector";

import jeff from "../../media/jeff.jpg";
import tim from "../../media/tim.jpg";

function Panel() {
  const isMobile = MobileDetector();
  const containerClass =
    "centreVert speaker " + (isMobile ? null : "tableHoriz");
  return (
    <div className="centrefold">
      <div className="tableVert">
        <div className={containerClass}>
          <img src={jeff} className="roundedImg" />
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
        <div className={containerClass}>
          <img src={tim} className="roundedImg" />
          <div>
            <h2 className="speakerName">
              <Translator page="panel" text="timInfo" />
            </h2>
            <h3 className="speakerInst">
              <Translator page="panel" text="timInst" />
            </h3>
            <h3 style={{ textAlign: "left" }}>
              <Translator page="panel" text="timTalk" />
            </h3>
            <p style={{ textAlign: "left" }}>
              <Translator page="panel" text="timAbstract" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Panel;
