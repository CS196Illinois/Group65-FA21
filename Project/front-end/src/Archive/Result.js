import React from "react";
import { Link } from "react-router-dom";

export default function Result() {
  return (
    <div>
      <h1>YOU DID ITTTT</h1>;<p>{text}</p>
      <Link to="/Home">
        <button className="btn m-4 btn-primary btn-lg">home page</button>
      </Link>
    </div>
  );
}
