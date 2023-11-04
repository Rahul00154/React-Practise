import React from "react";
import ReactDOM from "react-dom";

let callIndex = -1; //it is for track which hook actually being called

const stateValue = []; // it is used to store the actual state value for usestate

const useState = (initialValue) => {
  callIndex++;

  const currentCallIndex = Number(callIndex);

  if (stateValue[callIndex] === undefined) {
    stateValue[currentCallIndex] = initialValue;
  }
  const setInitialValue = (newValue) => {
    // console.log("newValue", newValue);
    stateValue[currentCallIndex] = newValue;
    renderApp();
  };

  return [stateValue[currentCallIndex], setInitialValue];
};

const App = () => {
  const [counterA, setCounterA] = useState(1);
  const [counterB, setCounterB] = useState(-1);
  return (
    <div>
      <div>
        <h1>Add CountA : {counterA} </h1>
        <button onClick={setCounterA(counterA + 1)}>Add</button>{" "}
        <button onClick={setCounterA(counterA - 1)}>Subtract</button>
      </div>{" "}
      <div>
        <h1>Add CountB : {counterB}</h1>
        <button onClick={setCounterB(counterB + 1)}>Add</button>{" "}
        <button onClick={setCounterB(counterB - 1)}>Subtract</button>
      </div>
    </div>
  );
};

const renderApp = () => {
  callIndex = -1;
  ReactDOM.render(<App />, document.getElementById("root"));
};

renderApp();
