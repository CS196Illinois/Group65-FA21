import React, { Component, useState } from "react";

class website extends React.Component {
  render() {
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
      <div>
        <h1 style={styleTitle}>LECTURE VIDEOS => SUMMARIZED TRANSCRIPTS</h1>
        <h3 style={centering}>
          Speed-running recorded lectures not good enough for you? Get a clean,
          readable summary of it instead!
        </h3>
        <button className="btn m-4 btn-primary btn-lg">Upload</button>
        <p style={centering}>X minutes of videos uploaded!</p>
        <p style={centering}>X minutes of words removed!</p>
        <p style={centering}>X% summary satisfaction rate!</p>
      </div>
    );
  }
}

export default website;
