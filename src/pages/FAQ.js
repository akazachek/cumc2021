import React, { Component } from "react";
import Translator from "../components/Translator";

class FAQ extends Component {
  render() {
    return (
      <div className="centrefold">
        <div className="tableVert centreVert">
          <h3>
            <Translator page="faq" text="attendQ" />
          </h3>
          <p className="alignLeft">
            <Translator page="faq" text="attendA" />
          </p>
          <h3>
            <Translator page="faq" text="talkQ" />
          </h3>
          <p className="alignLeft">
            <Translator page="faq" text="talkA" />
          </p>
        </div>
      </div>
    );
  }
}

export default FAQ;
