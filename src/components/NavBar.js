import React, { Component } from "react";
import NavItem from "./NavItem";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNav: "about"
    };
  }

  handleClick = (x) => {
    document.getElementById(this.state.activeNav).classList.remove("navActive");
    this.setState({ activeNav: x }, () => {
      document.getElementById(this.state.activeNav).classList.add("navActive");
    });
  };

  render() {
    return (
      <div class="navBar">
        <nav>
          <ul>
            <NavItem
              item="about"
              tolink="/about"
              click={this.handleClick}
            ></NavItem>
            <NavItem
              item="speakers"
              tolink="/speakers"
              click={this.handleClick}
            ></NavItem>
            <NavItem
              item="students"
              tolink="/students"
              click={this.handleClick}
            ></NavItem>
            <NavItem
              item="faq"
              tolink="/faq"
              click={this.handleClick}
            ></NavItem>
            <NavItem
              item="contact"
              tolink="/contact"
              click={this.handleClick}
            ></NavItem>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
