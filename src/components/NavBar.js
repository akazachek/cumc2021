import React from "react";
import MobileDetector from "./MobileDetector";
import NavItem from "./NavItem";

function NavBar() {
  var activeNav = "about";

  const handleClick = (x) => {
    document.getElementById(activeNav).classList.remove("navActive");
    activeNav = x;
    document.getElementById(activeNav).classList.add("navActive");
  };

  const isMobile = MobileDetector();

  return (
    <div class="navBar">
      <nav>
        {/* if you are redesigning this site, i highly recommend you make an entirely separate 
        mobile navbar component first, rather than doing what i did - using hacky CSS to fix this
        after the website is done */}
        {isMobile ? (
          <div id="mobileMenu">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul>
              <NavItem
                item="about"
                tolink="/about"
                click={handleClick}
              ></NavItem>
              <NavItem
                item="speakers"
                tolink="/speakers"
                click={handleClick}
              ></NavItem>
              <NavItem
                item="students"
                tolink="/students"
                click={handleClick}
              ></NavItem>
              <NavItem item="faq" tolink="/faq" click={handleClick}></NavItem>
              <NavItem
                item="contact"
                tolink="/contact"
                click={handleClick}
              ></NavItem>
            </ul>
          </div>
        ) : (
          <ul>
            <NavItem item="about" tolink="/about" click={handleClick}></NavItem>
            <NavItem
              item="speakers"
              tolink="/speakers"
              click={handleClick}
            ></NavItem>
            <NavItem
              item="students"
              tolink="/students"
              click={handleClick}
            ></NavItem>
            <NavItem item="faq" tolink="/faq" click={handleClick}></NavItem>
            <NavItem
              item="contact"
              tolink="/contact"
              click={handleClick}
            ></NavItem>
          </ul>
        )}
      </nav>
    </div>
  );
}

export default NavBar;
