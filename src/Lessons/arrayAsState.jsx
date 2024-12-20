import React, { useState } from "react";

const ArrayAsState = () => {
  const [item, setItem] = useState("");
  const [devices, setDevices] = useState(["Mac", "Windows", "Linux"]);
  const devicesList = devices.map((device, index) => (
    <li key={index}>{device}</li>
  ));

  return (
    <div
      style={{
        margin: "10% auto",
        backgroundColor: "#eee",
        width: "250px",
        textAlign: "left",
      }}
    >
      {devicesList}
      <hr />
      <input value={item} onChange={(e) => setItem(e.target.value)} />
      <button onClick={() => setDevices([...devices, item])}>Add</button>
    </div>
  );
};

export default ArrayAsState;
