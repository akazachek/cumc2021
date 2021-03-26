import React, { Component } from "react";

class LocaleSwitch extends Component {

    constructor(props) {
        super(props);
        this.state = {
          locale: this.props.locale
        };
      }

    toggle = () => {
        (this.state.locale === "en") ? 
            this.setState({
                locale: "fr"
            })
        :
            this.setState({
                locale: "en"
            })
        this.props.changeLocale(this.state.locale)
    }

  render() {
    return (
      <button className = "localeSwitch" onClick = {this.toggle}>
        en / fr
      </button>
    );
  }

}

export default LocaleSwitch;