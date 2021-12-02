import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as HomeImage } from "./figure.svg";
import "./custom.css";

// const sideBySideContainer = {
//   display: "flex",
// };

// const styleTitle1 = {
//   fontSize: 72,
//   paddingTop: "100px",
//   fontWeight: "bold",
// };
// const styleTitle2 = {
//   fontSize: 72,
//   paddingTop: "0px",
//   fontWeight: "bold",
//   fontStyle: "italic",
// };
// const styleSubtitle = {
//   fontSize: 24,
//   textAlign: "right",
// };

// const centering = {
//   textAlign: "center",
//   height: "100%",
//   position: "relative",
//   minHeight: "100vh",
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",
// };

// const right = {
//   textAlign: "right",
//   paddingRight: "50px",
// };

// const styleStats = {
//   fontSize: 24,
// };
const Title = () => {
  return (
    <div>
      <h1>Lecture Videos...</h1>
      <h1>Summarized.</h1>
    </div>
  );
};

const Subtitles = () => {
  return (
    <div>
      <h3>Can’t understand your lectures at ×2 speed?</h3>
      <h3>Get a shorter and readable transcript instead!</h3>
    </div>
  );
};

const Statistics = (props) => {
  const { minutesUploaded, wordsRemoved, percentSatisfied } = props;
  return (
    <div>
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
      <Title />
      <Subtitles />
      <HomeImage />
      <Link to="/Test">
        <button className="btn m-4 btn-primary btn-lg">test page</button>
      </Link>
      <button className="btn m-4 btn-primary btn-lg">Upload</button>
      <Statistics
        minutesUploaded={minutesUploaded}
        wordsRemoved={wordsRemoved}
        percentSatisfied={percentSatisfied}
      />
    </div>
  );
}
