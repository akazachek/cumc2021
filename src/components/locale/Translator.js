import React, { Component } from "react";
import { LocaleContext } from "./LocaleContext";

// takes in page (corresponding to a folder in ~/src/content/)
// and text (corresponding to key in a .json file containing the desired string).
// will automatically pull the string from the .json file corresponding to the current locale
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
      // lazy loading is required since the exact path depends on props
      const en = await require("../../content/" + this.props.page + "/en.json");
      const fr = await require("../../content/" + this.props.page + "/fr.json");
      this.setState({
        en: en,
        fr: fr
      });
    };
    fetchLocale();
  }

  render() {
    // idk why i have to copy this over here but it wont work if i access state directly so
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
