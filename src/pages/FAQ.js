import React, { Component } from "react";
import Translator from "../components/locale/Translator";
import FAQItem from "../components/FAQItem";

class FAQ extends Component {
  render() {
    return (
      <div className="centrefold">
        <div className="tableVert centreVert">
          <FAQItem qKey="attendQ" aKey="attendA" />
          <FAQItem qKey="talkQ" aKey="talkA" />
        </div>
      </div>
    );
  }
}

export default FAQ;
