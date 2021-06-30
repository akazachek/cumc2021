import React, { Fragment } from "react";
import Translator from "../../components/locale/Translator";
import MobileDetector from "../../components/MobileDetector";

function Keynotes() {
  const isMobile = MobileDetector();
  return (
    <div className="centrefold">
      <h3>
        <Translator page="keynotes" text="keynotesComing" />
      </h3>
      <div className="tableVert centreVert">
        <div className="tableHoriz committeeRow">
          <div className="tableVert committeeMember">
            <h3 className="noMargin alignLeft">
              <Translator page="keynotes" text="keynote1Name" />
            </h3>
            <p className="noMargin alignLeft">
              <Translator page="keynotes" text="keynote1Inst" />
            </p>
          </div>
          <div className="tableVert committeeMember">
            <h3 className="noMargin alignLeft">
              <Translator page="keynotes" text="keynote2Name" />
            </h3>
            <p className="noMargin alignLeft">
              <Translator page="keynotes" text="keynote2Inst" />
            </p>
          </div>
          {!isMobile ? (
            <Fragment>
              <div className="tableVert committeeMember">
                <h3 className="noMargin alignLeft">
                  <Translator page="keynotes" text="keynote3Name" />
                </h3>
                <p className="noMargin alignLeft">
                  <Translator page="keynotes" text="keynote3Inst" />
                </p>
              </div>
              <div className="tableVert committeeMember">
                <h3 className="noMargin alignLeft">
                  <Translator page="keynotes" text="keynote4Name" />
                </h3>
                <p className="noMargin alignLeft">
                  <Translator page="keynotes" text="keynote4Inst" />
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
              <h3 className="noMargin alignLeft">
                {" "}
                <Translator page="keynotes" text="keynote3Name" />
              </h3>
              <p className="noMargin alignLeft">
                <Translator page="keynotes" text="keynote3Inst" />
              </p>
            </div>
            <div className="tableVert committeeMember">
              <h3 className="noMargin alignLeft">
                <Translator page="keynotes" text="keynote4Name" />
              </h3>
              <p className="noMargin alignLeft">
                <Translator page="keynotes" text="keynote4Inst" />
              </p>
            </div>
          </div>
        ) : (
          <div />
        )}
        <div className="tableHoriz committeeRow">
          <div className="tableVert committeeMember">
            <h3 className="noMargin alignLeft">
              <Translator page="keynotes" text="keynote5Name" />
            </h3>
            <p className="noMargin alignLeft">
              <Translator page="keynotes" text="keynote5Inst" />
            </p>
          </div>
          <div className="tableVert committeeMember">
            <h3 className="noMargin alignLeft">
              {" "}
              <Translator page="keynotes" text="keynote6Name" />
            </h3>
            <p className="noMargin alignLeft">
              <Translator page="keynotes" text="keynote6Inst" />
            </p>
          </div>
          {!isMobile ? (
            <Fragment>
              <div className="tableVert committeeMember">
                <h3 className="noMargin alignLeft">
                  <Translator page="keynotes" text="keynote7Name" />
                </h3>
                <p className="noMargin alignLeft">
                  <Translator page="keynotes" text="keynote7Inst" />
                </p>
              </div>
              <div className="tableVert committeeMember">
                <h3 className="noMargin alignLeft">
                  {" "}
                  <Translator page="keynotes" text="keynote8Name" />
                </h3>
                <p className="noMargin alignLeft">
                  <Translator page="keynotes" text="keynote8Inst" />
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
              <h3 className="noMargin alignLeft">
                {" "}
                <Translator page="keynotes" text="keynote7Name" />
              </h3>
              <p className="noMargin alignLeft">
                <Translator page="keynotes" text="keynote7Inst" />
              </p>
            </div>
            <div className="tableVert committeeMember">
              <h3 className="noMargin alignLeft">
                {" "}
                <Translator page="keynotes" text="keynote8Name" />
              </h3>
              <p className="noMargin alignLeft">
                <Translator page="keynotes" text="keynote8Inst" />
              </p>
            </div>
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

export default Keynotes;
