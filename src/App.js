import "./index.css";
import React, { useState, useEffect } from "react";
import SingleColor from "./singleColor";
import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#222").all(10));

  const handleSubmit = function (e) {
    e.preventDefault();

    try {
      let colors = new Values(color).all(10);

      setList(colors);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <section className="section-center">
        <h3>color generator</h3>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="#222"
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
          <button className="btn" type="submit">
            generator
          </button>
        </form>
        <section className="grid">
          {error && <p className="error">Please enter a valid hex code</p>}
          {list.map((item, index) => {
            return (
              <SingleColor {...item} key={index} index={index} hex={item.hex} />
            );
          })}
        </section>
      </section>
    </>
  );
}

export default App;
