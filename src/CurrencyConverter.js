import React, { useEffect, useState } from "react";
import "./cc.css";

function CurrencyConverter() {
  const [amt, setAmt] = useState("");
  const [actual, setActual] = useState("EUR");
  const [to, setTo] = useState("USD");
  const [opt, setOpt] = useState("0");
  const [loading, setLoading] = useState(false);
  useEffect(
    function () {
      async function getCurrency() {
        setLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amt}&from=${actual}&to=${to}`
        );
        const data = await res.json();
        setOpt(data.rates[to]);
        setLoading(false);

        return function () {
          setLoading(false);
        };
      }
      if (actual === to) {
        setOpt(amt);
        return;
      }

      if (amt.length !== 0 && amt !== 0) getCurrency();
    },
    [amt, actual, to]
  );

  const handlechange = (e) => {
    setAmt(Number(e.target.value));
  };
  return (
    <div className="container">
      <div className="box">
        <input
          type="text"
          value={amt}
          onChange={handlechange}
          disabled={loading}
        />
        <select
          value={actual}
          onChange={(e) => {
            setActual(e.target.value);
          }}
          disabled={loading}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
        <select
          value={to}
          onChange={(e) => {
            setTo(e.target.value);
          }}
          disabled={loading}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
      </div>
      {opt}
    </div>
  );
}

export default CurrencyConverter;
