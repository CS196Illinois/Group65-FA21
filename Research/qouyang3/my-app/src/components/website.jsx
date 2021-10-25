import React from "react";


export default function Website() {
  const styleTitle = {
    fontSize: 36,
    color: "#4a54f1",
    textAlign: "center",
    paddingTop: "100px",
  };

  const centering = {
    textAlign: "center",
  };

  return (
    <div style={centering}>
      <h1 style={styleTitle}>LECTURE VIDEOS =&gt; SUMMARIZED TRANSCRIPTS</h1>
      <h3>
        Speed-running recorded lectures not good enough for you? Get a clean,
        readable summary of it instead!
      </h3>
      <button className="btn m-4 btn-primary btn-lg">Upload</button>
      <p>X minutes of videos uploaded!</p>
      <p>X minutes of words removed!</p>
      <p>X% summary satisfaction rate!</p>
    </div>
  );
}
