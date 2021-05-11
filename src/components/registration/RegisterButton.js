import React, { Component } from "react";
import Translator from "../locale/Translator";

class RegisterButton extends Component {
  render() {
    return (
      <button
        onClick={this.props.click.bind(this)}
        // hvr-wobble-to-top-right
        className="registerButton"
      >
        <Translator page="navigation" text="register" />
      </button>
    );
  }
}

export default RegisterButton;
