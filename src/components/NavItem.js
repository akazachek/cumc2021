import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavItem extends Component {

  render() {
    return (
      <li id={this.props.item}>
        <NavLink
          to={this.props.tolink}
          activeClassName="navActive"
          onClick={this.props.click.bind(this, this.props.item)}
        >
          {this.props.text}
        </NavLink>
      </li>
    );
  }

}

export default NavItem;