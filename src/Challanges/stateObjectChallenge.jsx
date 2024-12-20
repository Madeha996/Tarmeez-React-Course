import React, { useState } from "react";

const MyForm = () => {
  const [player, setPlayer] = useState({
    score: 0,
    firstName: "",
    lastName: "",
  });

  const handlClick = () => {
    setPlayer({ ...player, score: player.score + 1 });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          background: "#eee",
          border: "1px solid green",
          padding: "20px",
        }}
      >
        <label>
          Score : <b>{player.score}</b>{" "}
        </label>
        <button onClick={handlClick}> +1</button>
        <hr />
        <label>First Name: </label>
        <input
          value={player.firstName}
          onChange={(e) => setPlayer({ ...player, firstName: e.target.value })}
        />

        <hr />
        <label>Last Name: </label>
        <input
          value={player.lastName}
          onChange={(e) => setPlayer({ ...player, lastName: e.target.value })}
        />
      </div>
    </div>
  );
};

export default MyForm;
