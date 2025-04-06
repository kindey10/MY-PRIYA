import React from "react";
import PolaroidWall from "./components/PolaroidWall";
import MusicButton from "./components/MusicButton";


function App() {
  return (
    <div style={{ textAlign: "center", padding: "20px", fontFamily:"cursive"}}>
      <h1>HAPPY BIRTHDAY PRIYA!!</h1>
      <PolaroidWall />
      <MusicButton />
    </div>
  );
}


export default App;