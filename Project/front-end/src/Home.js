import React from "react";
import { ReactComponent as HomeImage } from "./figure.svg";
import { Form } from "react-bootstrap";
import Footer from "./Footer";

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

const Result = (props) => {
  const { transcript, summary } = props;
  return (
    <div
      style={{
        margin: "50px",
        textAlign: "center",
        marginBottom: "100px",
      }}
      className="lead"
    >
      <h2>Full Transcript</h2>
      <p style={{ textAlign: "left" }}>{transcript}</p>
      <h2>Summarized Transcript</h2>
      <p style={{ textAlign: "left", paddingBottom: "100px" }}>{summary}</p>
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

export default function Home() {
  const [file, setFile] = React.useState(null);
  const [transcript, setTranscript] = React.useState("");
  const [summary, setSummary] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [hasLoaded, setHasLoaded] = React.useState(false);

  function chooseFile(event) {
    setFile(event.target.files[0]);
  }

  function uploadFile(event) {
    console.dir(file);
    if (file === null) alert("No File Chosen.");
    else {
      setIsLoading(true);
      event.preventDefault();
      fetch(`http://127.0.0.1:3002/transcriber/${file.name}`)
        .then((response) => response.json())
        .then((data) => {
          setTranscript(data.transcript);
          setSummary(data.summary);
          setIsLoading(false);
          setHasLoaded(true);
        });
    }
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "100px",
        }}
      >
        <div style={{ paddingRight: 50, textAlign: "right" }}>
          <Title />
          <Subtitles />
          <Form.Group
            controlId="formFileLg"
            className="mb-3"
            style={{ paddingTop: "25px" }}
          >
            <Form.Control
              type="file"
              accept=".mp3., .wav, .flac, .aac, .mp4, .mov, .avi, .pdf, .txt"
              size="lg"
              onChange={chooseFile}
            />
          </Form.Group>
          <button className="btn m-4 btn-primary btn-lg" onClick={uploadFile}>
            Upload
          </button>
          {isLoading ? (
            <>
              <div className="spinner-border text-primary" role="status" />
              <h4 className="text-muted">Loading...</h4>
            </>
          ) : null}
        </div>
        <HomeImage style={{ paddingTop: 100 }} />
      </div>
      {hasLoaded ? <Result transcript={transcript} summary={summary} /> : null}
      <Footer style={{ position: "bottom" }} />
    </>
  );
}
