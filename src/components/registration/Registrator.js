import React, { Component, Fragment } from "react";
import RegisterForm from "./RegisterForm";
import RegisterButton from "./RegisterButton";

// this contains the backbones of a modal form designed
// to handle input. currently, it is not implemented as
// registration merely links to a separate website
export class Registrator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  showForm = () => {
    console.log("yes");
    this.setState(
      {
        visible: !this.state.visible
      },
      () => {
        this.toggleScrollLock();
      }
    );
  };

  toggleScrollLock = () => {
    document.querySelector("html").classList.toggle("scroll-lock");
  };

  onClickOutside = (event) => {
    if (this.modal && this.modal.contains(event.target)) return;
    this.closeForm();
  };

  closeForm = () => {
    this.setState({ visible: false });
    this.toggleScrollLock();
  };

  render() {
    return (
      <Fragment>
        <RegisterButton click={this.showForm} />
        {this.state.visible ? (
          <RegisterForm
            onSubmit={this.onSubmit}
            modalRef={(n) => {
              this.modal = n;
            }}
            buttonRef={(n) => (this.closeButton = n)}
            closeModal={this.closeForm}
            onClickOutside={this.onClickOutside}
          />
        ) : null}
      </Fragment>
    );
  }
}

export default Registrator;
