import React from "react";
import Translator from "../components/locale/Translator";
import MobileDetector from "../components/MobileDetector";

import mc from "../media/mc.jpg";
import booklet from "../media/assign4.pdf";
import uwo from "../media/uwo.jpg";
import fields from "../media/fields.png";

function About() {
  const isMobile = MobileDetector();
  return (
    <div className="centrefold">
      <div className={isMobile ? "" : "tableHoriz centreVert"}>
        {/* overwritting size */}
        <img
          id="aboutImg"
          src={mc}
          className="roundedImg"
          style={{ width: "20vw" }}
        />
        <div>
          <div className="textBlockWide">
            <p>
              <Translator page="about" text="conferenceOverview" />
            </p>
            <p>
              <Translator page="about" text="conferenceDetails" />
            </p>
          </div>
        </div>
      </div>
      <div id="bookletLink">
        <a href={booklet} className="noStyle colouredLink">
          <Translator page="about" text="conferenceBooklet" />
        </a>
      </div>
      <div className="tableHoriz">
        <img src={uwo} className="sponsor" />
        <img src={fields} className="sponsor" />
      </div>
    </div>
  );
}

export default About;
