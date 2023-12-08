import React, { useState } from "react";
import Mention from "./components/Mention";

const App = () => {
  const [text, setText] = useState("");

  const handleMentionChange = (newText, selectedOption) => {
    setText(newText);
    // console.log("New Text:", newText);
    // console.log("Selected Option:", selectedOption);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: '100vh',
      }}
    >
      <Mention onChange={handleMentionChange} value={text} />
    </div>
  );
};

export default App;
