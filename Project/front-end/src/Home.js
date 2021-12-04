import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as HomeImage } from "./figure.svg";
import { Form } from "react-bootstrap";

const titleStyle = {
  fontSize: 72,
  fontWeight: "bold",
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

  const [file, setFile] = React.useState("");
  const [fileContent, setFileContent] = React.useState("");

  function handleUpload(event) {
    setFile(event.target.files[0]);
    const reader = new FileReader();
    reader.onload = function (e) {
      setFileContent(e.target.result);
      console.log(e.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);
    // localStorage.setItem()
    // Add code here to upload file to server
  }

  // function previewFile() {
  //   const preview = document.querySelector("img");
  //   const file = document.querySelector("input[type=file]").files[0];
  //   const reader = new FileReader();

  //   reader.addEventListener(
  //     "load",
  //     function () {
  //       // convert image file to base64 string
  //       preview.src = reader.result;
  //     },
  //     false
  //   );

  //   if (file) {
  //     reader.readAsDataURL(file);
  //   }
  // }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ paddingRight: 50, textAlign: "right" }}>
          <Title />
          <Subtitles />
          <Link to="/Result">
            <button className="btn m-4 btn-primary btn-lg">Result Page</button>
          </Link>
          <Form.Group controlId="formFileLg" className="mb-3">
            <Form.Control
              type="file"
              accept=".mp3., .wav, .flac, .aac, .mp4, .mov, .avi, .pdf, .txt"
              size="lg"
              onChange={handleUpload}
            />
            <p>Filename: {file.name}</p>
            <p>File type: {file.type}</p>
            <p>File size: {file.size} bytes</p>
          </Form.Group>
          <button className="btn m-4 btn-primary btn-lg">Summscribe!</button>
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
