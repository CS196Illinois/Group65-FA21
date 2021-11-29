import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "./figure.svg";

const sideBySideContainer = {
  display: "flex",
};

const styleTitle1 = {
  fontSize: 72,
  paddingTop: "100px",
  fontWeight: "bold",
};
const styleTitle2 = {
  fontSize: 72,
  paddingTop: "0px",
  fontWeight: "bold",
  fontStyle: "italic",
};
const styleSubtitle = {
  fontSize: 24,
  textAlign: "right",
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

export default function Home() {
  const navigate = useNavigate();
  const handleClick = () => navigate("/test");
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
      <button type="button" onClick={handleClick}>
        Goodbye
      </button>
      <button className="btn m-4 btn-primary btn-lg">Upload</button>
      <p style={styleStats}>X minutes of videos uploaded!</p>
      <p style={styleStats}>X minutes of words removed!</p>
      <p style={styleStats}>X% summary satisfaction rate!</p>
    </div>
  );
}
