import React, { Component } from "react";
import EventItem from "./EventItem";

// renders a navigation bar with an indeterminate amount of elements
// e.g. see lectures page or student page
class EventBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventActiveItem: this.props.initial
    };
  }

  render() {
    return (
      <div className="eventBar">
        <ul>
          {/* an array of strings `events` corresponding to the desired navigation
          items is passed as props */}
          {this.props.events.map((event) => (
            <EventItem
              clss={event === this.props.initial ? "eventActive" : ""}
              item={event}
              click={this.props.click}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default EventBar;
