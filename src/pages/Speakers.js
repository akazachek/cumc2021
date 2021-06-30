import React, { Component } from "react";

import EventBar from "../components/EventBar";

import Keynotes from "./Speakers/Keynotes";
import Panels from "./Speakers/Panels";
import Workshops from "./Speakers/Workshops";
import Fairs from "./Speakers/Fairs";

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
      case "panels":
        return <Panels />;
      case "workshops":
        return <Workshops />;
      case "fairs":
        return <Fairs />;
    }
  }

  render() {
    return (
      <div>
        <EventBar
          initial="keynotes"
          click={this.handleClick}
          events={["keynotes", "panels", "workshops", "fairs"]}
        ></EventBar>
        {this.renderPage(this.state.activeEvent)}
      </div>
    );
  }
}

export default Speakers;
