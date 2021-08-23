import React from "react";
import Translator from "../../components/locale/Translator";
import MobileDetector from "../../components/MobileDetector";

import lean from "../../media/lean.png";
import beamer from "../../media/beamer.png";
import beamerTeX from "../../media/beamer.tex";
import leanSlides from "../../media/Nakade.pdf";
import leanZIP from "../../media/lean.zip";

function Workshops() {
  const isMobile = MobileDetector();
  const containerClass =
    "centreVert speaker " + (isMobile ? null : "tableHoriz");
  return (
    <div className="centrefold">
      <div className="tableVert">
        <div className={containerClass}>
          <img src={beamer} className="roundedImg" />
          <div>
            <h2 className="speakerName">
              <Translator page="workshops" text="beamerTitle" />
            </h2>
            <h3 className="speakerInst">
              <Translator page="workshops" text="beamerHost" />
            </h3>
            <p style={{ textAlign: "left" }}>
              <Translator page="workshops" text="beamerAbstract" />
            </p>
            <a
              style={{ textAlign: "left", fontSize: "20px" }}
              className="noStyle colouredLink"
              href={beamerTeX}
              target="_blank"
            >
              <Translator page="workshops" text="beamerTemplate" />
            </a>
          </div>
        </div>
        <div className={containerClass}>
          <img src={lean} className="roundedImg" />
          <div>
            <h2 className="speakerName">
              <Translator page="workshops" text="leanTitle" />
            </h2>
            <h3 className="speakerInst">
              <Translator page="workshops" text="leanHost" />
            </h3>
            <p style={{ textAlign: "left" }}>
              <Translator page="workshops" text="leanAbstract" />
            </p>
            <a
              style={{ textAlign: "left", fontSize: "20px" }}
              className="noStyle colouredLink"
              href={leanSlides}
              target="_blank"
            >
              <Translator page="workshops" text="leanSlides" />
            </a>
            <a
              style={{ textAlign: "left", fontSize: "20px" }}
              className="noStyle colouredLink"
              href={leanZIP}
              target="_blank"
            >
              <Translator page="workshops" text="leanFiles" />
            </a>
            <a
              style={{ textAlign: "left", fontSize: "20px" }}
              className="noStyle colouredLink"
              href="https://leanprover-community.github.io/lean_projects.html"
              target="_blank"
            >
              <Translator page="workshops" text="leanLink1" />
            </a>
            <a
              style={{ textAlign: "left", fontSize: "20px" }}
              className="noStyle colouredLink"
              href="https://xenaproject.wordpress.com/2021/06/05/half-a-year-of-the-liquid-tensor-experiment-amazing-developments/"
              target="_blank"
            >
              <Translator page="workshops" text="leanLink2" />
            </a>
            <a
              style={{ textAlign: "left", fontSize: "20px" }}
              className="noStyle colouredLink"
              href="https://imo-grand-challenge.github.io/"
              target="_blank"
            >
              <Translator page="workshops" text="leanLink3" />
            </a>
            <a
              style={{ textAlign: "left", fontSize: "20px" }}
              className="noStyle colouredLink"
              href="https://www.cs.ru.nl/~freek/100/"
              target="_blank"
            >
              <Translator page="workshops" text="leanLink4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workshops;
