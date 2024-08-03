//import { useState } from "react";

export const initialInput = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  "duration": 10
};

export default function Form(props) {
  const { userInput, setUserInput } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onCalculate(userInput)
  };

  const handleReset = (event) => {
    setUserInput(initialInput);
  };

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) => {
              inputChangeHandler("current-savings", event.target.value);
            }}
            type="number"
            id="current-savings"
            value={userInput["current-savings"]}
          />
        </p>

        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event) => {
              inputChangeHandler("yearly-contribution", event.target.value);
            }}
            type="number"
            id="yearly-contribution"
            value={userInput["yearly-contribution"]}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) => {
              inputChangeHandler("expected-return", event.target.value);
            }}
            type="number"
            id="expected-return"
            value={userInput["expected-return"]}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) => {
              inputChangeHandler("duration", event.target.value);
            }}
            type="number"
            id="duration"
            value={userInput["duration"]}
          />
        </p>
      </div>
      <p className="actions">
        <button onClick={handleReset} type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}

setTimeout(30);
