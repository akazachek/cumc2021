import React, { Component } from "react";

// creates a button which references an onClick passed
// as a prop (in App.js) to swap between two locales
class LocaleSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: this.props.locale
    };
  }

  toggle = () => {
    this.state.locale === "en"
      ? this.setState({
          locale: "fr"
        })
      : this.setState({
          locale: "en"
        });
    this.props.changeLocale(this.state.locale);
  };

  // there is a bug where switching locale for the first
  // requires clicking twice -- not sure why that is or how
  // to fix it
  render() {
    return (
      <button className="localeSwitch" onClick={this.toggle}>
        en / fr
      </button>
    );
  }
}

export default LocaleSwitch;
