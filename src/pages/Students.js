import React, { Component } from "react";

import EventBar from "../components/EventBar";

import Posters from "./Students/Posters";
import Talks from "./Students/Talks";

class Speakers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeEvent: "talks"
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
      case "talks":
        return <Talks />;
      case "posters":
        return <Posters />;
    }
  }

  render() {
    return (
      <div>
        <EventBar
          initial="talks"
          click={this.handleClick}
          events={[
            ["talks", "Student Talks"],
            ["posters", "Student Posters"]
          ]}
        ></EventBar>
        {this.renderPage(this.state.activeEvent)}
      </div>
    );
  }
}

export default Speakers;
