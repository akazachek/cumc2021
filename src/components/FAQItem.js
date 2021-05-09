import React, { Component, Fragment } from "react";
import Translator from "./locale/Translator";

import { BsChevronDoubleRight } from "react-icons/bs";
import { IconContext } from "react-icons";

class FAQItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }
  render() {
    const clss = this.state.open ? "faqHead faqHeadOpen" : "faqHead";
    return (
      // using fragments since expandable lists were implemented later,
      // container div will mess up formatting
      <Fragment>
        <h3 className={clss} onClick={this.handleClick.bind(this)}>
          <div className="faqIconContainer">
            <IconContext.Provider value={{ size: "3vh" }}>
              <BsChevronDoubleRight style={{ className: clss }} />
            </IconContext.Provider>
          </div>
          <Translator page="faq" text={this.props.qKey} />
        </h3>
        {this.state.open ? (
          <div className="textBlock">
            <p>
              <Translator page="faq" text={this.props.aKey} />
            </p>
          </div>
        ) : (
          <div></div>
        )}
      </Fragment>
    );
  }
}

export default FAQItem;
