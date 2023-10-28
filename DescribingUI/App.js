import React from "react";
import ReactDOM from "react-dom/client";

import { HandleProps, PackingList } from "./components";
const person = {
  name: "Rahul Anand",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

const Todo = () => {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve The videoPhone</li>
        <li>Prepare React Notes</li>
        <li>Work On fuelled engine</li>
      </ul>
    </div>
  );
};

const TodoList = () => {
  return (
    <>
      <h1>Hedy's Lamar Todo's</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <ul>
        <li>Invent New Traffic Lights</li>
        <li>Rehearse Movie Scene</li>
        <li>Improve Spectrum Technology</li>
      </ul>
    </>
  );
};

const Profile = () => {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
};

function Galllery() {
  return (
    <section>
      <h1>Amazing Scientist</h1>
      <Profile />
      <Profile />
    </section>
  );
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <HandleProps />
      <PackingList />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
