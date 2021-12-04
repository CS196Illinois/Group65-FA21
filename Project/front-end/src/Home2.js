import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ReactComponent as HomeImage } from "./figure.svg";
// import "./custom.css";

const titleStyle = {
  fontSize: 72,
  fontWeight: "bold",
};

// const centering = {
//   textAlign: "center",
//   height: "100%",
//   position: "relative",
//   // minHeight: "100vh",
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",
// };

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
    <div style={{ textAlign: "right" }} className="text-muted">
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

  const [selectedFile, setSelectedFile] = useState(null);

  const onFileChange = (event) => {
    setSelectedFile({ selectedFile: event.target.files[0] });
  };

  const onFileUpload = () => {
    const formData = new FormData();
    console.dir(selectedFile);
    console.log(selectedFile.name);
    formData.append(
      "myFile", // change name
      selectedFile,
      selectedFile.name
    );

    console.log(selectedFile);

    axios.post("api/uploadfile", formData);
  };

  const fileData = () => {
    if (selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {selectedFile.name}</p>
          <p>File Type: {selectedFile.type}</p>
          <p>Last Modified: {selectedFile.lastModifiedDate}</p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ paddingRight: 50, textAlign: "right" }}>
          <Title />
          <Subtitles />
          <Link to="/Test">
            <button className="btn m-4 btn-primary btn-lg">test page</button>
          </Link>

          <input type="file" onChange={onFileChange} />
          <button className="btn m-4 btn-primary btn-lg" onClick={onFileUpload}>
            Upload
          </button>
          {fileData()}
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
