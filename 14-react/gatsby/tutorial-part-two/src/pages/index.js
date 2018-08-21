import React from "react"

export default () => (
  <div style={{ margin: '3em auto', maxWidth: 600 }}>
    <h1 title="Title">Spike Milligan</h1>
    <div>
      <p>Engraving on the headstone of Spike Milligan</p>
      <blockquote>Dywedais wrthych fy mod i'n sâl</blockquote>
      <p>{(new Date).toLocaleDateString()}</p>
    </div>
  </div>
);
