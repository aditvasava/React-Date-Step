import React, { useState } from "react";
import "./tipcalc.css";

function TipCalc() {
  const [billamt, setBillAmt] = useState(0);
  const [tip, setTip] = useState(0);
  const [friendtip, friendsetTip] = useState(0);
  const [flag, setFlag] = useState(false);
  let avg = (Number(tip) + Number(friendtip)) / 2;
  avg = avg / 100;
  const finaltip = billamt * avg;
  if (flag) {
    setBillAmt(0);
    setTip(0);
    friendsetTip(0);
    setFlag(false);
  }
  return (
    <div>
      <h1>Tip Calculator</h1>
      <br />
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Bill data={billamt} onModify={setBillAmt}>
          How much was the bill ?
        </Bill>
        <Service tipamt={tip} onModify={setTip}>
          How did you like the service ?
        </Service>
        <Service tipamt={friendtip} onModify={friendsetTip}>
          How did your friend like the service ?
        </Service>
        <Output bill={billamt} tip={finaltip}>
          You pay
        </Output>
        <Reset onReset={setFlag} />
      </div>
    </div>
  );
}

function Bill(props) {
  const handlechange = (e) => {
    props.onModify(e.target.value);
  };
  return (
    <div>
      {props.children}
      {"  "}
      <input type="text" onChange={handlechange} value={props.data} />
    </div>
  );
}

function Service(props) {
  const handlechange = (e) => {
    props.onModify(e.target.value);
  };
  return (
    <div>
      {props.children}{" "}
      <select value={props.tipamt} onChange={handlechange}>
        <option value="0">Dissatisifed (0%)</option>
        <option value="5">Average (5%)</option>
        <option value="10">Good (10%)</option>
        <option value="20">Amazing (20%)</option>
      </select>
    </div>
  );
}

function Output(props) {
  return (
    <div>
      {props.children} ${props.bill} (${props.tip})
      <br />
      <br />
    </div>
  );
}

function Reset(props) {
  return (
    <button
      onClick={() => {
        props.onReset(true);
      }}
    >
      Reset
    </button>
  );
}

export default TipCalc;
