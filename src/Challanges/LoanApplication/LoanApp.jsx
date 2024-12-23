import React, { useState } from "react";
import "./loanApp.css";
import Modal from "./Modal";

const LoanApp = () => {
  const [values, setValues] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salary: "",
  });
  const [isVisible, setIsVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const isDisabled =
    values.name === "" ||
    values.phoneNumber === "" ||
    values.age === "" ||
    values.salary === "";

  function handleSubmission() {
    if (values.name?.length < 2 || values.name?.length > 20) {
      setErrorMessage("Name Not Valid");
    } else if (values.phoneNumber.length < 10)
      setErrorMessage("Phone Number Not Valid");
    else if (values.age < 20 || values.age > 70)
      setErrorMessage("Age Not Valid");
    setIsVisible(true);
  }

  function handleDivClick() {
    if (isVisible) setIsVisible(false);
  }

  return (
    <div className="loanApp" onClick={handleDivClick}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h2>Requesting Loan</h2>

        <div className="formItem">
          <label>Name</label>
          <input
            type="text"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
        </div>

        <div className="formItem">
          <label>Phone Number</label>
          <input
            type="text"
            value={values.phoneNumber}
            onChange={(e) =>
              setValues({ ...values, phoneNumber: e.target.value })
            }
          />
        </div>

        <div className="formItem">
          <label>Age</label>
          <input
            type="number"
            value={values.age}
            onChange={(e) => setValues({ ...values, age: e.target.value })}
          />
        </div>

        <div className="formItem">
          <label>Are You An Employee?</label>
          <input
            type="checkbox"
            value={values.isEmployee}
            onChange={(e) =>
              setValues({ ...values, isEmployee: e.target.checked })
            }
          />
        </div>

        <div className="formItem">
          <label>Salary</label>
          <select
            value={values.salary}
            onChange={(e) => setValues({ ...values, salary: e.target.value })}
          >
            <option>1 - 1000$</option>
            <option>1000$ - 10000$</option>
          </select>
        </div>

        <button
          disabled={isDisabled}
          className={isDisabled ? "disable" : "button"}
          onClick={handleSubmission}
        >
          Sumbit
        </button>
      </form>
      <Modal isVisible={isVisible} errorMessage={errorMessage} />
    </div>
  );
};

export default LoanApp;
