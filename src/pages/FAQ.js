import React, { Component } from "react";
import FAQItem from "../components/FAQItem";

class FAQ extends Component {
  render() {
    return (
      <div className="centrefold">
        <div className="tableVert centreVert">
          <FAQItem qKey="attendQ" aKey="attendA" />
          <FAQItem qKey="talkQ" aKey="talkA" />
          <FAQItem qKey="langQ" aKey="langA" />
          <FAQItem qKey="missedQ" aKey="missedA" />
          <FAQItem qKey="prereqQ" aKey="prereqA" />
          <FAQItem qKey="covidQ" aKey="covidA" />
        </div>
      </div>
    );
  }
}

export default FAQ;
