import React, { useEffect, useState } from "react";

function ReactHook() {
  const [name, setName] = useState("murshid");
  const [btcData, setBtcData] = useState({});

  const fetchData = () => {
    fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
      .then((response) => response.json())
      .then((jsonData) => setBtcData(jsonData.bpi.USD))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []); 
  function nameLooper() {
    if (name === "saqlain") {
      setName("murshid");
    } else if (name === "murshid") {
      setName("saqi");
    } else if (name === "saqi") {
      setName("jon");
    } else {
      setName("nothing");
    }
  }
  console.log("before this done ");
  fetch("https://randomuser.me/api/")
    .then((reponse) => reponse.json())
    .then((data) => console.log(data));
  // console.log('after this done ')
  return (
    <div>
      <p>My name is {name}</p>
      <button onClick={nameLooper}>Change Name</button>
      <div>
        <h1>Current BTC/USD data</h1>
        <p>Code: {btcData.code}</p>
        <p>Symbol: {btcData.symbol}</p>
        <p>Rate: {btcData.rate}</p>
        <p>Description: {btcData.description}</p>
        <p>Rate Float: {btcData.rate_float}</p>
      </div>
    </div>
  );
}

export default ReactHook;
