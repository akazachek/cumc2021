import React from "react";
import Translator from "../../components/locale/Translator";
import MobileDetector from "../../components/MobileDetector";

import grad from "../../media/grad.jpg";
import western from "../../media/western.png";
import waterloo from "../../media/waterloo.png";
import alberta from "../../media/alberta.png";

function Fairs() {
  const isMobile = MobileDetector();
  const containerClass =
    "centreVert speaker " + (isMobile ? null : "tableHoriz");
  const gradClass = isMobile ? "tableVert" : "tableHoriz";
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
            <div className={gradClass}>
              <img src={alberta} className="gradSchool" />
              <img src={waterloo} className="gradSchool" />
              <img src={western} className="gradSchool" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fairs;
