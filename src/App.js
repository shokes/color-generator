import "./index.css";
import React, { useState, useEffect } from "react";
import SingleColor from "./singleColor";

function App() {
  const [color, setColor] = useState("");
  return (
    <>
      <section className="section-center">
        <h3>color generator</h3>
        <div>
          <input placeholder="#f15025" />
          <button>generate</button>
        </div>
        <SingleColor />
      </section>
    </>
  );
}

export default App;
