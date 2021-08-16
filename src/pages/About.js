import React from "react";
import Translator from "../components/locale/Translator";
import MobileDetector from "../components/MobileDetector";

import mc from "../media/mc.jpg";
import booklet from "../media/package.pdf";
import uwo from "../media/uwo.png";
import studc from "../media/studc.png";

function About() {
  const isMobile = MobileDetector();
  return (
    <div id="dummyID" className="centrefold">
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
        <a href={booklet} target="_blank" className="noStyle colouredLink">
          <Translator page="about" text="conferenceBooklet" />
        </a>
      </div>
      <div className="tableHoriz">
        <a href="https://www.uwo.ca" target="_blank">
          <img src={uwo} className="sponsor" />
        </a>
        <a href="https://studc.math.ca" target="_blank">
          <img src={studc} className="sponsor" style={{ height: "13vh" }} />
        </a>
      </div>
    </div>
  );
}

export default About;
