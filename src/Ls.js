import React, { useState } from "react";

function Ls() {
  const [val, setVal] = useState("");
  const handleclick = () => {
    localStorage.setItem("Value-Key", JSON.stringify(val));
  };
  const handlechange = (e) => {
    setVal(e.target.value);
  };
  return (
    <div style={{ padding: "50px", border: "1px solid black" }}>
      <input type="text" value={val} onChange={handlechange} />
      <br />
      <br />
      <button onClick={handleclick}>Click to set Item in local storage</button>
    </div>
  );
}

export default Ls;
