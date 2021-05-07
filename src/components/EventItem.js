import React from "react";
import Translator from "./locale/Translator";
import MobileDetector from "./MobileDetector";

import { IoCaretForwardCircle } from "react-icons/io5";
import { IconContext } from "react-icons";

function EventItem(props) {
  const iconClass = props.clss === "eventActive" ? " iconActive" : ""; // not hardcoded so icons can change colour too
  const isMobile = MobileDetector();
  const iconStyle = !isMobile ? { "padding-right": "0.2vw" } : null;
  return (
    <div className="eventDiv">
      <li
        className={props.clss}
        id={props.item}
        onClick={props.click.bind(this, props.item)}
      >
        <IconContext.Provider
          value={{
            className: "eventIcon" + iconClass
          }}
        >
          <IoCaretForwardCircle id={props.item + "Icon"} style={iconStyle} />
        </IconContext.Provider>
        {isMobile ? (
          <p>
            <Translator page="navigation" text={props.item} />
          </p>
        ) : (
          <Translator page="navigation" text={props.item} />
        )}
      </li>
    </div>
  );
}

export default EventItem;
