import React from "react";
import ReactDOM from "react-dom/client";
import List from "./components/List";

const App = () => {
  return (
    <div>
      <h1>Hello Learning List and keys</h1>
      <List />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
