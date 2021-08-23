import React, { useEffect, useState } from "react";
import Translator from "../../components/locale/Translator";
import MobileDetector from "../../components/MobileDetector";

import kamnitzer from "../../media/Kamnitzer.jpg";
import postle from "../../media/Postle.jpg";
import pramanik from "../../media/Pramanik.png";
import quastel from "../../media/Quastel.jpg";
import ramdorai from "../../media/Ramdorai.jpeg";
import ramdoraiVid from "../../media/Ramdorai.mp4";
import sinnamon from "../../media/Sinnamon.jpg";
import willigenburg from "../../media/van Willigenburg.jpg";
import vidotto from "../../media/Vidotto.jpg";

function Keynotes() {
  // i have literally no clue what this is
  // but it somehow makes KaTeX render
  const [value, setValue] = useState(true);
  useEffect(() => {
    setValue((x) => !x);
    window.KaTeXRender();
  }, [value]);
  const isMobile = MobileDetector();
  const containerClass =
    "centreVert speaker " + (isMobile ? null : "tableHoriz");
  return (
    <div id="keynotes" className="centrefold">
      <div className="tableVert">
        <div className={containerClass}>
          <img src={kamnitzer} className="roundedImg" />
          <div>
            <h2 className="speakerName">
              <Translator page="keynotes" text="keynote1Name" />
            </h2>
            <h3 className="speakerInst">
              <Translator page="keynotes" text="keynote1Inst" />
            </h3>
            <h3 style={{ textAlign: "left" }}>
              <Translator page="keynotes" text="keynote1Title" />
            </h3>
            <p style={{ textAlign: "left" }}>
              <Translator page="keynotes" text="keynote1Abstract" />
            </p>
            <a
              style={{ textAlign: "left", fontSize: "20px" }}
              className="noStyle colouredLink"
              href="https://drive.google.com/file/d/1gu_tkNWZAaUv-hsbj73QmAK9DMtPyqBJ/view?usp=sharing"
              target="_blank"
            >
              <Translator page="keynotes" text="recording" />
            </a>
          </div>
        </div>
        <div className={containerClass}>
          <img src={postle} className="roundedImg" />
          <div>
            <h2 className="speakerName">
              <Translator page="keynotes" text="keynote2Name" />
            </h2>
            <h3 className="speakerInst">
              <Translator page="keynotes" text="keynote2Inst" />
            </h3>
            <h3 style={{ textAlign: "left" }}>
              <Translator page="keynotes" text="keynote2Title" />
            </h3>
            <p style={{ textAlign: "left" }}>
              <Translator page="keynotes" text="keynote2Abstract" />
            </p>
            <a
              style={{ textAlign: "left", fontSize: "20px" }}
              className="noStyle colouredLink"
              href="https://drive.google.com/file/d/1fEZe4y_FCFN0fLVB9O_JhDvSEnznhTOv/view?usp=sharing"
              target="_blank"
            >
              <Translator page="keynotes" text="recording" />
            </a>
          </div>
        </div>
        <div className={containerClass}>
          <img src={pramanik} className="roundedImg" />
          <div>
            <h2 className="speakerName">
              <Translator page="keynotes" text="keynote3Name" />
            </h2>
            <h3 className="speakerInst">
              <Translator page="keynotes" text="keynote3Inst" />
            </h3>
            <h3 style={{ textAlign: "left" }}>
              <Translator page="keynotes" text="keynote3Title" />
            </h3>
            <p style={{ textAlign: "left" }}>
              <Translator page="keynotes" text="keynote3Abstract" />
            </p>
            <a
              style={{ textAlign: "left", fontSize: "20px" }}
              className="noStyle colouredLink"
              href="https://drive.google.com/file/d/1Ftc4Cxax9q3VeaykUHCCz62KxRc4pg4z/view?usp=sharing"
              target="_blank"
            >
              <Translator page="keynotes" text="recording" />
            </a>
          </div>
        </div>
        <div className={containerClass}>
          <img src={quastel} className="roundedImg" />
          <div>
            <h2 className="speakerName">
              <Translator page="keynotes" text="keynote4Name" />
            </h2>
            <h3 className="speakerInst">
              <Translator page="keynotes" text="keynote4Inst" />
            </h3>
            <h3 style={{ textAlign: "left" }}>
              <Translator page="keynotes" text="keynote4Title" />
            </h3>
            <p style={{ textAlign: "left" }}>
              <Translator page="keynotes" text="keynote4Abstract" />
            </p>
            <a
              style={{ textAlign: "left", fontSize: "20px" }}
              className="noStyle colouredLink"
              href="https://drive.google.com/file/d/1hZ_N7RcqA6fghAMg3ohfoqNOjaqgNJJM/view?usp=sharing"
              target="_blank"
            >
              <Translator page="keynotes" text="recording" />
            </a>
          </div>
        </div>
        <div className={containerClass}>
          <img src={ramdorai} className="roundedImg" />
          <div>
            <h2 className="speakerName">
              <Translator page="keynotes" text="keynote5Name" />
            </h2>
            <h3 className="speakerInst">
              <Translator page="keynotes" text="keynote5Inst" />
            </h3>
            <h3 style={{ textAlign: "left" }}>
              <Translator page="keynotes" text="keynote5Title" />
            </h3>
            <p style={{ textAlign: "left" }}>
              <Translator page="keynotes" text="keynote5Abstract" />
            </p>
            <a
              style={{ textAlign: "left", fontSize: "20px" }}
              className="noStyle colouredLink"
              href={ramdoraiVid}
              target="_blank"
            >
              <Translator page="keynotes" text="recording" />
            </a>
          </div>
        </div>
        <div className={containerClass}>
          <img src={sinnamon} className="roundedImg" />
          <div>
            <h2 className="speakerName">
              <Translator page="keynotes" text="keynote6Name" />
            </h2>
            <h3 className="speakerInst">
              <Translator page="keynotes" text="keynote6Inst" />
            </h3>
            <h3 style={{ textAlign: "left" }}>
              <Translator page="keynotes" text="keynote6Title" />
            </h3>
            <p style={{ textAlign: "left" }}>
              <Translator page="keynotes" text="keynote6Abstract" />
            </p>
            <a
              style={{ textAlign: "left", fontSize: "20px" }}
              className="noStyle colouredLink"
              href="https://drive.google.com/file/d/1oj5yCxzvVoNOEiE7jQ-U_HMH6QUW7CTA/view?usp=sharing"
              target="_blank"
            >
              <Translator page="keynotes" text="recording" />
            </a>
          </div>
        </div>
        <div className={containerClass}>
          <img src={willigenburg} className="roundedImg" />
          <div>
            <h2 className="speakerName">
              <Translator page="keynotes" text="keynote7Name" />
            </h2>
            <h3 className="speakerInst">
              <Translator page="keynotes" text="keynote7Inst" />
            </h3>
            <h3 style={{ textAlign: "left" }}>
              <Translator page="keynotes" text="keynote7Title" />
            </h3>
            <p style={{ textAlign: "left" }}>
              <Translator page="keynotes" text="keynote7Abstract" />
            </p>
            <a
              style={{ textAlign: "left", fontSize: "20px" }}
              className="noStyle colouredLink"
              href="https://drive.google.com/file/d/1JY9zD_-kgZrLuVtxhioFRoFpJA2ST0n_/view?usp=sharing"
              target="_blank"
            >
              <Translator page="keynotes" text="recording" />
            </a>
          </div>
        </div>
        <div className={containerClass}>
          <img src={vidotto} className="roundedImg" />
          <div>
            <h2 className="speakerName">
              <Translator page="keynotes" text="keynote8Name" />
            </h2>
            <h3 className="speakerInst">
              <Translator page="keynotes" text="keynote8Inst" />
            </h3>
            <h3 style={{ textAlign: "left" }}>
              <Translator page="keynotes" text="keynote8Title" />
            </h3>
            <p style={{ textAlign: "left" }}>
              <Translator page="keynotes" text="keynote8Abstract" />
            </p>
            <a
              style={{ textAlign: "left", fontSize: "20px" }}
              className="noStyle colouredLink"
              href="https://drive.google.com/file/d/1ERkYW9yR1Xkfn0n-fMAkhw8j7yrtg5FH/view?usp=sharing"
              target="_blank"
            >
              <Translator page="keynotes" text="recording" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Keynotes;
