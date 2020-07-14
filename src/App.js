import React from "react";
// import logo from './logo.svg';
import "./App.css";
import myWonderfulImage from "./gomycode.png";
function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1 black", maxWidth: "100vw" }} />
      <h1 className="title red"> Your name here </h1>
      <br />
      <img src="/Gomycode-black.jpg" /> <br />
      <img src={myWonderfulImage} />
      <br />
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/UcycZretpbc"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default App;
