import React, { Component } from "react";
import EventItem from "./EventItem";

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
