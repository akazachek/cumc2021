import React from "react";
import Translator from "../../components/locale/Translator";
import MobileDetector from "../../components/MobileDetector";

import industry from "../../media/industry.jpg";
import presenting from "../../media/presenting.jpg";

function Panels() {
  const isMobile = MobileDetector();
  const containerClass =
    "centreVert speaker " + (isMobile ? null : "tableHoriz");

  return (
    <div className="centrefold">
      <div className="tableVert">
        <div className={containerClass}>
          <img src={presenting} className="roundedImg" />
          <div>
            <h2 className="speakerName">
              <Translator page="panels" text="talksHeader" />
            </h2>
            <p style={{ textAlign: "left" }}>
              <Translator page="panels" text="talksBody" />
            </p>
            <p style={{ textAlign: "left" }}>
              <Translator page="panels" text="talksPeople" />
            </p>
          </div>
        </div>
      </div>
      <div className={containerClass}>
        <img src={industry} className="roundedImg" />
        <div>
          <h2 className="speakerName">
            <Translator page="panels" text="industryHeader" />
          </h2>
          <p style={{ textAlign: "left" }}>
            <Translator page="panels" text="industryBody" />
          </p>
          <p style={{ textAlign: "left" }}>
            <Translator page="panels" text="industryHein" />
          </p>
          <p style={{ textAlign: "left" }}>
            <Translator page="panels" text="industryMadhu" />
          </p>
          <p style={{ textAlign: "left" }}>
            <Translator page="panels" text="industryJulia" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Panels;
