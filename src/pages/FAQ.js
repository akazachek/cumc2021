import React, { Component } from "react";
import Translator from "../components/locale/Translator";

class FAQ extends Component {
  render() {
    return (
      <div className="centrefold">
        <div className="tableVert centreVert">
          <h3>
            <Translator page="faq" text="attendQ" />
          </h3>
          <div className="textBlock">
            <p>
              <Translator page="faq" text="attendA" />
            </p>
          </div>

          <h3>
            <Translator page="faq" text="talkQ" />
          </h3>
          <div className="textBlock">
            <p>
              <Translator page="faq" text="talkA" />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default FAQ;
