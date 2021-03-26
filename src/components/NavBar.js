import React, { Component } from "react";
import NavItem from "./NavItem";

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navActiveItem: "about"
    };
  }

  handleClick = (x) => {
    if (this.state.navActiveItem.length > 0) {
      document
        .getElementById(this.state.navActiveItem)
        .classList.remove("navActive");
    }
    this.setState({ navActiveItem: x }, () => {
      document
        .getElementById(this.state.navActiveItem)
        .classList.add("navActive");
    });
  };

  render() {
    return (
      <div class="navBar">
        <nav>
          <ul>
            <NavItem
              item="about"
              text="About"
              tolink="/about"
              click={this.handleClick}
            ></NavItem>
           <NavItem
              item="keynotes"
              text="Keynote Speakers"
              tolink="/keynotes"
              click={this.handleClick}
            ></NavItem>
            <NavItem
              item="students"
              text="Student Posters"
              tolink="/students"
              click={this.handleClick}
            ></NavItem>
            <NavItem
              item="faq"
              text="FAQs"
              tolink="/faq"
              click={this.handleClick}
            ></NavItem>
            <NavItem
              item="contact"
              text="Contact"
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