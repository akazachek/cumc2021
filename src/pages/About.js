import React from "react";
import Translator from "../components/locale/Translator";
import MobileDetector from "../components/MobileDetector";

import mc from "../media/mc.jpg";
// import booklet from "../media/assign4.pdf";
import uwo from "../media/uwo.png";
import studc from "../media/studc.png";

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
        {/* dummy link until conference booklet is ready */}
        <a href={"#"} className="noStyle colouredLink">
          <Translator page="about" text="conferenceRegister" />
        </a>
      </div>
      <div className="tableHoriz">
        <a href="https://www.uwo.ca">
          <img src={uwo} className="sponsor" />
        </a>
        <a href="https://studc.math.ca">
          <img src={studc} className="sponsor" style={{ height: "13vh" }} />
        </a>
      </div>
    </div>
  );
}

export default About;
