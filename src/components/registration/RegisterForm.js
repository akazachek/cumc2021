import React from "react";
import ReactDOM from "react-dom";
import FocusTrap from "focus-trap-react";

// this contains the backbones of a modal form designed
// to handle input. currently, it is not implemented as
// registration merely links to a separate website
export const Modal = (props) => {
  return ReactDOM.createPortal(
    <FocusTrap>
      <aside
        tag="aside"
        role="dialog"
        tabIndex="-1"
        aria-modal="true"
        className="registerFormContainer"
        onClick={props.onClickOutside}
      >
        <div className="registerFormContainer">
          <button
            aria-label="Close Modal"
            aria-labelledby="close-modal"
            className="_modal-close"
            onClick={props.closeForm}
          >
            close
          </button>
          <div className="registerForm">
            <form onSubmit={props.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input className="form-control" id="name" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="form-group">
                <button className="form-control btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </aside>
    </FocusTrap>,
    document.body
  );
};
export default Modal;
