import React, { Component } from "react";
import Translator from "../locale/Translator";

class RegisterButton extends Component {
  render() {
    return (
      <button
        onClick={this.props.click.bind(this)}
        className="registerButton hvr-wobble-to-top-right"
      >
        <Translator page="registration" text="register" />
      </button>
    );
  }
}

export default RegisterButton;
