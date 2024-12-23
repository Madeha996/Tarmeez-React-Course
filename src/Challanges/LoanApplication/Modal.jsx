import React from "react";

const Modal = ({ isVisible, errorMessage = null }) => {
  if (isVisible) {
    return (
      <div className="modal">
        <div className="modalContent">
          <h1 style={{ color: errorMessage ? "red" : "green" }}>
            {errorMessage
              ? errorMessage
              : "The Form Has Been Submitted Succesfuly !"}
          </h1>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Modal;
