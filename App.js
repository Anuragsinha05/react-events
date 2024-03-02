import React, { useState } from "react";

const App = ()=>{
  const purple = "#8e44ad"
  const [bg,setBg] = useState(purple);
  const [Name,setName] =useState("click Me")

  const bgChange=()=>{
    console.log("clicked");
    let newBg = "#34495e";
    setBg(newBg);
    setName("ouch!! 🐺");
  }

  const bgBack=()=>{
    console.log("clicked");
    let newBg = "#8e44ad";
    setBg(newBg);
    setName("Ayyo!! 😠");
  }

  return(
    <>
      <div style={{ backgroundColor:bg }}>
        <button onClick={bgChange} onDoubleClick={bgBack}>{Name}</button>
      </div>
    </>
  );
}

export default App;
