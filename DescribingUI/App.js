import React from "react";
import ReactDOM from "react-dom/client";

const Profile = () => {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
};

function Galllery() {
  return (
    <section>
      <h1>Amazing Scientist</h1>
      <Profile />
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Galllery />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
