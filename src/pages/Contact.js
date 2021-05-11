import React, { Fragment } from "react";
import Translator from "../components/locale/Translator";
import MobileDetector from "../components/MobileDetector";

function Contact() {
  const isMobile = MobileDetector();
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
            <h3 className="noMargin alignLeft">Clare Bedford</h3>
            <p className="noMargin alignLeft">
              <Translator page="contact" text="events" />
            </p>
          </div>
          {!isMobile ? (
            <Fragment>
              <div className="tableVert committeeMember">
                <h3 className="noMargin alignLeft">Yashan Chelliahpillai</h3>
                <p className="noMargin alignLeft">
                  <Translator page="contact" text="money" />
                </p>
              </div>
              <div className="tableVert committeeMember">
                <h3 className="noMargin alignLeft">Jacob Ender</h3>
                <p className="noMargin alignLeft">
                  <Translator page="contact" text="words" />
                </p>
              </div>
            </Fragment>
          ) : (
            <div />
          )}
        </div>
        {isMobile ? (
          <div className="tableHoriz committeeRow">
            <div className="tableVert committeeMember">
              <h3 className="noMargin alignLeft">Yashan Chelliahpillai</h3>
              <p className="noMargin alignLeft">
                <Translator page="contact" text="money" />
              </p>
            </div>
            <div className="tableVert committeeMember">
              <h3 className="noMargin alignLeft">Jacob Ender</h3>
              <p className="noMargin alignLeft">
                <Translator page="contact" text="words" />
              </p>
            </div>
          </div>
        ) : (
          <div />
        )}
        <div className="tableHoriz committeeRow">
          <div className="tableVert committeeMember">
            <h3 className="noMargin alignLeft">Alex Kazachek</h3>
            <p className="noMargin alignLeft">
              <Translator page="contact" text="tech" />
            </p>
          </div>
          <div className="tableVert committeeMember">
            <h3 className="noMargin alignLeft">Mahima Siali</h3>
            <p className="noMargin alignLeft">
              <Translator page="contact" text="int" />
            </p>
          </div>
          {!isMobile ? (
            <Fragment>
              <div className="tableVert committeeMember">
                <h3 className="noMargin alignLeft">Moneet Tiwana</h3>
                <p className="noMargin alignLeft">
                  <Translator page="contact" text="comms" />
                </p>
              </div>
              <div className="tableVert committeeMember">
                <h3 className="noMargin alignLeft">Saranya Varakunan</h3>
                <p className="noMargin alignLeft">
                  <Translator page="contact" text="media" />
                </p>
              </div>
            </Fragment>
          ) : (
            <div />
          )}
        </div>
        {isMobile ? (
          <div className="tableHoriz committeeRow">
            <div className="tableVert committeeMember">
              <h3 className="noMargin alignLeft">Moneet Tiwana</h3>
              <p className="noMargin alignLeft">
                <Translator page="contact" text="comms" />
              </p>
            </div>
            <div className="tableVert committeeMember">
              <h3 className="noMargin alignLeft">Saranya Varakunan</h3>
              <p className="noMargin alignLeft">
                <Translator page="contact" text="media" />
              </p>
            </div>
          </div>
        ) : (
          <div />
        )}
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

export default Contact;
