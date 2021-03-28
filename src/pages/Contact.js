import React, { Component } from "react";
import Translator from "../components/locale/Translator";

class Contact extends Component {
  render() {
    return (
      <div className="centrefold">
        <h2>
          <Translator page="contact" text="committee" />
        </h2>
        <div className="tableVert centreVert">
          <div className="tableHoriz committeeRow">
            <div className="tableVert committeeMember">
              <h3 className="noMargin alignLeft">Mahima Siali</h3>
              <p className="noMargin alignLeft">
                <Translator page="contact" text="president" />
              </p>
            </div>
            <div className="tableVert committeeMember">
              <h3 className="noMargin alignLeft">Mahima Siali</h3>
              <p className="noMargin alignLeft">
                <Translator page="contact" text="president" />
              </p>
            </div>
            <div className="tableVert committeeMember">
              <h3 className="noMargin alignLeft">Mahima Siali</h3>
              <p className="noMargin alignLeft">
                <Translator page="contact" text="president" />
              </p>
            </div>
            <div className="tableVert committeeMember">
              <h3 className="noMargin alignLeft">Mahima Siali</h3>
              <p className="noMargin alignLeft">
                <Translator page="contact" text="role1" />
              </p>
            </div>
          </div>
          <div className="tableHoriz committeeRow">
            <div className="tableVert committeeMember">
              <h3 className="noMargin alignLeft">Mahima Siali</h3>
              <p className="noMargin alignLeft">
                <Translator page="contact" text="president" />
              </p>
            </div>
            <div className="tableVert committeeMember">
              <h3 className="noMargin alignLeft">Mahima Siali</h3>
              <p className="noMargin alignLeft">
                <Translator page="contact" text="president" />
              </p>
            </div>
            <div className="tableVert committeeMember">
              <h3 className="noMargin alignLeft">Mahima Siali</h3>
              <p className="noMargin alignLeft">
                <Translator page="contact" text="president" />
              </p>
            </div>
            <div className="tableVert committeeMember">
              <h3 className="noMargin alignLeft">Mahima Siali</h3>
              <p className="noMargin alignLeft">
                <Translator page="contact" text="role1" />
              </p>
            </div>
          </div>
        </div>
        <h3>
          <Translator page="contact" text="contact" />
          <a className="noStyle colouredLink" href="mailto:cumc@uwo.ca">
            cumc@uwo.ca
          </a>
          .
        </h3>
      </div>
    );
  }
}

export default Contact;
