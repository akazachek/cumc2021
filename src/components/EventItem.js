import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class EventItem extends Component {
  render() {
    return (
      <li
        className={this.props.clss}
        id={this.props.item}
        onClick={this.props.click.bind(this, this.props.item)}
      >
        {this.props.text}
      </li>
    );
  }
}

export default EventItem;
