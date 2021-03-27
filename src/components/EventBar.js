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
      <div className="eventBar tableVert">
        <ul>
          {this.props.events.map((event) => (
            <EventItem
              clss={event[0] == this.props.initial ? "eventActive" : ""}
              item={event[0]}
              text={event[1]}
              click={this.props.click}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default EventBar;
