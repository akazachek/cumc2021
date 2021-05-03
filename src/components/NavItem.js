import React, { Component } from "react";
import Translator from "./locale/Translator";
import { NavLink } from "react-router-dom";

class NavItem extends Component {
  render() {
    return (
      <li
        id={this.props.item}
        className={"hvr-sweep-to-bottom " + this.props.active}
      >
        <NavLink
          to={this.props.tolink}
          activeClassName="navActive"
          onClick={this.props.click.bind(this, this.props.item)}
        >
          <Translator page="navigation" text={this.props.item} />
        </NavLink>
      </li>
    );
  }
}

export default NavItem;
