import React from "react";
import { ReactComponent as Logo } from "./figure.svg";

const sideBySideContainer = {
  display: "flex",
};

const styleTitle1 = {
  fontSize: 72,
  paddingTop: "100px",
  fontWeight: "bold",
  // paddingRight: "700px",
};
const styleTitle2 = {
  fontSize: 72,
  paddingTop: "0px",
  // paddingRight: "700px",
  fontWeight: "bold",
  fontStyle: "italic",
};
const styleSubtitle = {
  fontSize: 24,
  textAlign: "right",
  // paddingRight: "700px",
};

const centering = {
  textAlign: "center",
  height: "100%",
  position: "relative",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const right = {
  textAlign: "right",
  paddingRight: "50px",
};

const styleStats = {
  fontSize: 24,
};

export default function Website() {
  return (
    <div style={centering}>
      <div style={sideBySideContainer}>
        <div style={right}>
          <h1 style={styleTitle1}>Lecture Videos...</h1>
          <h1 style={styleTitle2}>Summarized.</h1>
          <h3 style={styleSubtitle}>
            Can’t understand your lectures at ×2 speed?
          </h3>
          <h3 style={styleSubtitle}>
            Get a shorter and readable transcript instead!
          </h3>
        </div>
        <Logo />
      </div>
      <button className="btn m-4 btn-primary btn-lg">Upload</button>
      <p style={styleStats}>X minutes of videos uploaded!</p>
      <p style={styleStats}>X minutes of words removed!</p>
      <p style={styleStats}>X% summary satisfaction rate!</p>
    </div>
  );
}
