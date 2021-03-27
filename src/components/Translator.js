import React, { Component } from "react";
import { LocaleContext } from "./LocaleContext";

class Translator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      en: "",
      fr: ""
    };
  }

  componentDidMount() {
    const fetchLocale = async () => {
      const en = await require("../content/" + this.props.page + "/en.json");
      const fr = await require("../content/" + this.props.page + "/fr.json");
      this.setState({
        en: en,
        fr: fr
      });
    };
    fetchLocale();
  }

  render() {
    /* value will be passed as string */
    var locales = {
      en: this.state.en,
      fr: this.state.fr
    };
    return (
      <LocaleContext.Consumer>
        {(value) => locales[value][this.props.text]}
      </LocaleContext.Consumer>
    );
  }
}

export default Translator;
