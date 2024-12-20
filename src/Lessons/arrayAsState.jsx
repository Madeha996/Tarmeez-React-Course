import React, { useState } from "react";

let id = 3;

const ArrayAsState = () => {
  const [item, setItem] = useState("");
  const [editedItem, setEditedItem] = useState("");
  const [devices, setDevices] = useState([
    { id: 0, name: "Mac" },
    { id: 1, name: "Windows" },
    { id: 2, name: "Linux" },
  ]);

  const handleDelete = (id) => {
    setDevices(devices.filter((device) => device.id !== id));
  };

  const handleEdit = (id) => {
    const newDevices = devices.map((device) => {
      if (device.id === id) {
        return { ...device, name: device.name + "0" };
      }
      return device;
    });
    setDevices(newDevices);
  };

  const devicesList = devices.map((device) => (
    <li key={device.id}>
      {device.name}
      <div style={{ textAlign: "right" }}>
        <button onClick={() => handleDelete(device.id)}>Delete</button>
        <button onClick={() => handleEdit(device.id)}>Edit</button>
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
