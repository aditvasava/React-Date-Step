import React, { useRef, useState } from "react";
import "./date.css";

function DateCal() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [slider, setSlider] = useState(1);
  const inputref = useRef();
  const day = new Date().getDay();
  const date = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const getdaystring = (d) => {
    if (d === 0) return "Sunday";
    else if (d === 1) return "Monday";
    else if (d === 2) return "Tuesday";
    else if (d === 3) return "Wednesday";
    else if (d === 4) return "Thursday";
    else if (d === 5) return "Friday";
    else return "Saturday";
  };

  const handleSlider = (e) => {
    setSlider(e.target.value);
    setStep(Number(e.target.value));
  };

  const getmonth = (m) => {
    if (m === 0) return "January";
    else if (m === 1) return "Febraury";
    else if (m === 2) return "March";
    else if (m === 3) return "April";
    else if (m === 4) return "May";
    else if (m === 5) return "June";
    else if (m === 6) return "July";
    else if (m === 7) return "August";
    else if (m === 8) return "September";
    else if (m === 9) return "October";
    else if (m === 10) return "November";
    else return "December";
  };
  const [today, setToday] = useState({
    day: getdaystring(day),
    date,
    month: getmonth(month),
    year,
  });
  //   const ms = new Date().getDay();
  const mystyle = {
    width: "80vw",
    padding: "20px",
    //border: "0.1px dotted black",
    textAlign: "center",
    fontSize: "20px",
    fontFamily: "Arial",
    letterSpacing: "2px",
    position: "absolute",
    left: "50%",
    top: "45%",
    "--webkit-transform": "translate(-50%, -50%)",
    transform: "translate(-50%, -50%)",
  };
  const buttonstyle = {
    width: "40px",
    height: "auto",
    padding: "1px",
    fontSize: "20px",
    border: "none",
    fontWeight: "300",
    backgroundColor: "whitesmoke",
  };
  const container = {
    margin: "auto 350px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "40px",
  };

  const handlePlus = () => {
    setStep((prev) => {
      return prev + 1;
    });
  };

  const handleMinus = () => {
    setStep((prev) => {
      return prev - 1;
    });
  };

  const handleInput = (e) => {
    if (!e.target.value || e.target.value === 0) {
      getMs(0);
      setCount(0);
    } else {
      getMs(Number(e.target.value));
      setCount(Number(e.target.value));
    }
  };

  const handlePlusCount = () => {
    getMs(count + step);
    setCount((prev) => {
      return prev + step;
    });
  };

  const handleMinusCount = () => {
    getMs(count - step);
    setCount((prev) => {
      return prev - step;
    });
  };

  const getMs = (x) => {
    const start = Date.now();
    const nd = new Date(start + x * 24 * 60 * 60 * 1000);
    setToday((prev) => {
      return {
        day: getdaystring(nd.getDay()),
        date: nd.getDate(),
        month: getmonth(nd.getMonth()),
        year: nd.getFullYear(),
      };
    });
  };
  const inputstyle = {
    backgroundColor: "white",
    border: "1px dotted black",
  };

  const handlereset = () => {
    getMs(0);
    setCount(0);
    setStep(1);
    setSlider(1);
    inputref.current.value = 0;
  };
  return (
    <div style={mystyle}>
      {/* <div style={container}>
        <button style={buttonstyle} onClick={handleMinus}>
          -
        </button>
        Step: {step}
        <button style={buttonstyle} onClick={handlePlus}>
          +
        </button>
      </div> */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <input
          type="range"
          min={1}
          max={10}
          value={slider}
          onChange={handleSlider}
          style={{ marginRight: "20px" }}
        />
        {slider}
      </div>

      <div style={container}>
        <button style={buttonstyle} onClick={handleMinusCount}>
          -
        </button>
        <input
          type="number"
          style={inputstyle}
          onChange={handleInput}
          placeholder={count}
          ref={inputref}
        />
        <button style={buttonstyle} onClick={handlePlusCount}>
          +
        </button>
      </div>

      {!count && count !== 0 && <div>Enter Text in the input box</div>}

      {count === 0 && (
        <div style={{ marginBottom: "20px" }}>
          Today is{" "}
          <b>
            {" "}
            {today.day}, {today.date} {today.month} {today.year}{" "}
          </b>
        </div>
      )}

      {count > 0 && (
        <div style={{ marginBottom: "20px" }}>
          {count} {count == 1 ? "day" : "days"} from today is{" "}
          <b>
            {" "}
            {today.day}, {today.date} {today.month} {today.year}{" "}
          </b>
        </div>
      )}

      {count < 0 && (
        <div style={{ marginBottom: "20px" }}>
          {-count} {count == -1 ? "day" : "days"} ago was{" "}
          <b>
            {" "}
            {today.day}, {today.date} {today.month} {today.year}{" "}
          </b>
        </div>
      )}

      <button
        style={{ backgroundColor: "white", border: "0.1px solid black" }}
        onClick={handlereset}
      >
        Reset
      </button>
    </div>
  );
}

export default DateCal;
