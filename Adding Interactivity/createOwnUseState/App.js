import React from "react";
import ReactDOM from "react-dom";

const useState = (initialValue) => {
  const setInitialValue = () => {};

  return [initialValue, setValue];
};

const App = () => {
  return (
    <div>
      <div>
        <h1>Add CountA : 1</h1>
        <button>Add</button> <button>Subtract</button>
      </div>{" "}
      <div>
        <h1>Add CountB : 1</h1>
        <button>Add</button> <button>Subtract</button>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
