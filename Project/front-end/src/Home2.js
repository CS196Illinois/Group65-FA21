import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as HomeImage } from "./figure.svg";
// import "./custom.css";

const sideBySideContainer = {
  display: "flex",
};

const titleStyle = {
  fontSize: 72,
  fontWeight: "bold",
};

const styleSubtitle = {
  fontSize: 24,
  textAlign: "right",
};

const centering = {
  textAlign: "center",
  height: "100%",
  position: "relative",
  // minHeight: "100vh",
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
const Title = () => {
  return (
    <div style={{ paddingTop: 100 }}>
      <h1 style={titleStyle}>Lecture Videos...</h1>
      <h1 style={{ ...titleStyle, ...{ fontStyle: "italic" } }}>Summarized.</h1>
    </div>
  );
};

const Subtitles = () => {
  return (
    <div style={{ textAlign: "center" }} className="text-muted">
      <h3>Can’t understand your lectures at ×2 speed?</h3>
      <h3>Get a short and readable transcript instead!</h3>
    </div>
  );
};

const Statistics = (props) => {
  const { minutesUploaded, wordsRemoved, percentSatisfied } = props;
  return (
    <div style={{ textAlign: "center" }}>
      <h3>{minutesUploaded} minutes of videos uploaded!</h3>
      <h3>{wordsRemoved} words removed!</h3>
      <h3>{percentSatisfied}% satisfaction rate!</h3>
    </div>
  );
};

export default function Home() {
  const minutesUploaded = 0;
  const wordsRemoved = 0;
  const percentSatisfied = 0;
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ paddingRight: 50, textAlign: "right" }}>
          <Title />
          <Subtitles />
          <Link to="/Test">
            <button className="btn m-4 btn-primary btn-lg">test page</button>
          </Link>
          <button className="btn m-4 btn-primary btn-lg">Upload</button>
        </div>
        <HomeImage style={{ paddingTop: 100 }} />
      </div>
      <Statistics
        minutesUploaded={minutesUploaded}
        wordsRemoved={wordsRemoved}
        percentSatisfied={percentSatisfied}
      />
    </div>
  );
}
