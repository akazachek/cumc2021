import React, { Component } from "react";

import EventBar from "../components/EventBar";

import Keynotes from "./Speakers/Keynotes";
import Panel from "./Speakers/Panel";
import Workshop from "./Speakers/Workshop";

class Speakers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeEvent: "keynotes"
    };
  }

  /* icon implementation was done later, which is why this hacky */
  handleClick = (x) => {
    document
      .getElementById(this.state.activeEvent)
      .classList.remove("eventActive");
    document
      .getElementById(this.state.activeEvent + "Icon")
      .classList.remove("iconActive");
    this.setState({ activeEvent: x }, () => {
      document
        .getElementById(this.state.activeEvent)
        .classList.add("eventActive");
      document
        .getElementById(this.state.activeEvent + "Icon")
        .classList.add("iconActive");
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
          events={["keynotes", "panel", "workshop"]}
        ></EventBar>
        {this.renderPage(this.state.activeEvent)}
      </div>
    );
  }
}

export default Speakers;
