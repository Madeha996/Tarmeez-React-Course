import React, { useState } from "react";

let id = 3;
const ArrayAsState = () => {
  const [item, setItem] = useState("");
  const [devices, setDevices] = useState([
    { id: 0, name: "Mac" },
    { id: 1, name: "Windows" },
    { id: 2, name: "Linux" },
  ]);

  const handleDelete = (id) => {
    console.log("id", id);
    setDevices(devices.filter((device) => device.id !== id));
  };

  const devicesList = devices.map((device) => (
    <li key={device.id}>
      {device.name}
      <div style={{ textAlign: "right" }}>
        <button onClick={() => handleDelete(device.id)}>Delete</button>
      </div>
    </li>
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
      <button
        onClick={() => {
          setDevices([...devices, { id: id + 1, name: item }]);
          id++;
        }}
      >
        Add
      </button>
    </div>
  );
};

export default ArrayAsState;
