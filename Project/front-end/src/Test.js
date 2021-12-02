import React from "react";
import { Link } from "react-router-dom";

export default function Test() {
  return (
    <div>
      <h1>YOU DID ITTTT</h1>;
      <Link to="/Home2">
        <button className="btn m-4 btn-primary btn-lg">test page</button>
      </Link>
    </div>
  );
}
