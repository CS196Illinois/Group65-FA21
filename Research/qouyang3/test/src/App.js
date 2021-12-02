
import React, { useState } from "react";


function App() {
  return (
    const [text, setText] = useState("");

    const onClick = () => {
      
      fetch("http://localhost:5000/transcribe")
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setText(result.data);
        });
  );
}


export default App;
