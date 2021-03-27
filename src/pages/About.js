import React, { Component } from "react";
import Translator from "../components/Translator";

import mc from "../media/mc.jpg";
import booklet from "../media/assign4.pdf";

class About extends Component {
  render() {
    return (
      <div className = "centrefold">
        <div className = "tableHoriz centreVert">
          <img src={mc} className = "roundedImg" />
          <div>
            <p className="alignLeft">
              <Translator page = "about" text = "conferenceOverview" />
            </p>
            <p className="alignLeft">
              <Translator page = "about" text = "conferenceDetails" />
            </p>
          </div>
        </div>
        <div id = "bookletLink">
          <a href={booklet} className = "noStyle" >
            <Translator page = "about" text = "conferenceBooklet" />
          </a>
        </div>
      </div>
    );
  }
}

export default About;
