import React, { Component } from "react";

import EventBar from "../components/EventBar";

import Keynotes from "./Keynotes";
import Panel from "./Panel";
import Workshop from "./Workshop";

class Speakers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeEvent: "keynotes"
    };
  }

  handleClick = (x) => {
    document
      .getElementById(this.state.activeEvent)
      .classList.remove("eventActive");
    this.setState({ activeEvent: x }, () => {
      document
        .getElementById(this.state.activeEvent)
        .classList.add("eventActive");
    });
  };

  renderPage(page) {
    switch (page) {
      case "keynotes":
        return <Keynotes />;
      case "panel":
        return <Panel />;
      case "workshop":
        return <Workshop />;
    }
  }

  render() {
    return (
      <div>
        <EventBar
          initial="keynotes"
          click={this.handleClick}
          events={[
            ["keynotes", "Keynote Lectures"],
            ["panel", "Industry Panel"],
            ["workshop", "Workshop"]
          ]}
        ></EventBar>
        {this.renderPage(this.state.activeEvent)}
      </div>
    );
  }
}

export default Speakers;
