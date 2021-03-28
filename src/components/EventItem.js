import React, { Component } from "react";
import Translator from "./locale/Translator";

import { IoCaretForwardCircle } from "react-icons/io5";
import { IconContext } from "react-icons";

class EventItem extends Component {
  render() {
    var iconClass = this.props.clss === "eventActive" ? " iconActive" : "";
    return (
      <div className="eventDiv">
        <li
          className={this.props.clss}
          id={this.props.item}
          onClick={this.props.click.bind(this, this.props.item)}
        >
          <IconContext.Provider
            value={{
              className: "eventIcon" + iconClass
            }}
          >
            <IoCaretForwardCircle id={this.props.item + "Icon"} />
          </IconContext.Provider>
          <Translator page="navigation" text={this.props.item} />
        </li>
      </div>
    );
  }
}

export default EventItem;
