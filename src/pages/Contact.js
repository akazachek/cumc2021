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
              <h3 className="noMargin alignLeft">Amar Venga</h3>
              <p className="noMargin alignLeft">
                <Translator page="contact" text="president" />
              </p>
            </div>
            <div className="tableVert committeeMember">
              <h3 className="noMargin alignLeft">Femi Adewusi</h3>
              <p className="noMargin alignLeft">
                <Translator page="contact" text="comms" />
              </p>
            </div>
            <div className="tableVert committeeMember">
              <h3 className="noMargin alignLeft">Clare Bedford</h3>
              <p className="noMargin alignLeft">
                <Translator page="contact" text="role1" />
              </p>
            </div>
            <div className="tableVert committeeMember">
              <h3 className="noMargin alignLeft">Yashan Chelliahpillai</h3>
              <p className="noMargin alignLeft">
                <Translator page="contact" text="money" />
              </p>
            </div>
          </div>
          <div className="tableHoriz committeeRow">
            <div className="tableVert committeeMember">
              <h3 className="noMargin alignLeft">Jacob Ender</h3>
              <p className="noMargin alignLeft">
                <Translator page="contact" text="words" />
              </p>
            </div>
            <div className="tableVert committeeMember">
              <h3 className="noMargin alignLeft">Lewis Glabush</h3>
              <p className="noMargin alignLeft">
                <Translator page="contact" text="outreach" />
              </p>
            </div>
            <div className="tableVert committeeMember">
              <h3 className="noMargin alignLeft">Alex Kazachek</h3>
              <p className="noMargin alignLeft">
                <Translator page="contact" text="tech" />
              </p>
            </div>
            <div className="tableVert committeeMember">
              <h3 className="noMargin alignLeft">Mahima Siali</h3>
              <p className="noMargin alignLeft">
                <Translator page="contact" text="role2" />
              </p>
            </div>
          </div>
          <div className="tableHoriz committeeRow">
            <div className="tableVert committeeMember">
              <h3 className="noMargin alignLeft">Moneet Tiwana</h3>
              <p className="noMargin alignLeft">
                <Translator page="contact" text="socials" />
              </p>
            </div>
            <div className="tableVert committeeMember">
              <h3 className="noMargin alignLeft">Saranya Varakunan</h3>
              <p className="noMargin alignLeft">
                <Translator page="contact" text="media" />
              </p>
            </div>
            <div className="tableVert committeeMember">
              <h3 className="noMargin alignLeft"></h3>
              <p className="noMargin alignLeft">
                <Translator page="contact" text="" />
              </p>
            </div>
            <div className="tableVert committeeMember">
              <h3 className="noMargin alignLeft"></h3>
              <p className="noMargin alignLeft">
                <Translator page="contact" text="" />
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
