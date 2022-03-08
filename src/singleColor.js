import React, { useState, useEffect } from "react";
const SingleColor = function ({ rgb, weight, index, hex }) {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hexValue = `#${hex}`;

  useEffect(() => {
    const timeout = setInterval(() => {
      setAlert(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [alert]);
  return (
    <article
      className={`color ${index > 7 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p>{weight}%</p>
      <p>{hexValue}</p>
      {alert && <p>copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
