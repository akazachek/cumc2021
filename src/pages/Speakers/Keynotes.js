import React from "react";
import Translator from "../../components/locale/Translator";
import MobileDetector from "../../components/MobileDetector";

import generic from "../../media/generic1.png";

function Keynotes() {
  const isMobile = MobileDetector();
  const containerClass =
    "centreVert speaker " + (isMobile ? null : "tableHoriz");
  return (
    <div className="centrefold">
      <div className="tableVert">
        <div className={containerClass}>
          
                  <div>
                      <p style={{ textAlign: "center" }}>
                          <Translator page="keynotes" text="keynotesComing" />
                      </p>

                      <p style={{ textAlign: "center" }}>
                          <Translator page="keynotes" text="keynoteInquiries" />
                      </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Keynotes;
