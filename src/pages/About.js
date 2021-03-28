import React, { Component } from "react";
import Translator from "../components/locale/Translator";

import mc from "../media/mc.jpg";
import booklet from "../media/assign4.pdf";
import uwo from "../media/uwo.jpg";
import fields from "../media/fields.png";

class About extends Component {
  render() {
    return (
      <div className="centrefold">
        <div className="tableHoriz centreVert">
          {/* overwritting size */}
          <img src={mc} className="roundedImg" style={{ width: "20vw" }} />
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
}

export default About;
