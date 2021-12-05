import React from "react";
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
      <h1 style={{ ...titleStyle, fontStyle: "italic" }}>Summarized.</h1>
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

  const [file, setFile] = React.useState(null);
  const [resultData, setResultData] = React.useState("");
  const [summary, setSummary] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  function handleUpload(event) {
    setFile(event.target.files[0]);
  }

  function uploadFile(event) {
    setIsLoading(true);
    event.preventDefault();
    fetch(`http://127.0.0.1:3002/transcribe/${file.name}`)
      .then((response) => response.json())
      .then((data) => {
        setResultData(data.transcript);
        setSummary(data.summary);
        setIsLoading(false);
      });
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ paddingRight: 50, textAlign: "right" }}>
          <Title />
          <Subtitles />
          <Form.Group controlId="formFileLg" className="mb-3">
            <Form.Control
              type="file"
              accept=".mp3., .wav, .flac, .aac, .mp4, .mov, .avi, .pdf, .txt"
              size="lg"
              onChange={handleUpload}
            />
          </Form.Group>
          <button className="btn m-4 btn-primary btn-lg" onClick={uploadFile}>
            Upload
          </button>
          {isLoading ? (
            <>
              <div className="spinner-border text-primary" role="status" />
              <h4>loading...</h4>
            </>
          ) : null}
        </div>
        <HomeImage style={{ paddingTop: 100 }} />
      </div>
      <p style={{ padding: "50px" }}>{resultData}</p>
      <p style={{ padding: "50px" }}>{summary}</p>
      <Statistics
        minutesUploaded={minutesUploaded}
        wordsRemoved={wordsRemoved}
        percentSatisfied={percentSatisfied}
      />
    </div>
  );
}
