/*
 *
 *** Parcel Feature  ***
 * Created a server
 * HMR (Hot Module Reload)
 * File watcher Algorithm -C++(Execute file when changes occur)
 * Bundling
 * Minifying
 * Cleaning our code (ex-remove console.log)
 * Dev and Production Build
 * Super Fast Build Algorithm
 * Image Optimization
 * CachinG While Development
 * Compression
 * Compatible with older version of browser
 * Https on dev
 * Https on dev
 * port number
 * Consistent hashing algorithm
 * Zero Config
 * Tree Shaking (Removing unwanted things)
 *
 *
 * Transitive Dependencies
 *
 */

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "title" }, "Hello Heading 1");

const heading1 = React.createElement(
  "h2",
  { id: "heading2" },
  "Hello Heading2"
);

const Heading2 = () => {
  return <h1>Babe I am Learning React</h1>;
};

const Title = () => {
  return <h4>Title Component</h4>;
};

//Composing Components
const App = () => {
  return (
    <>
      {Title()}
      <Heading2 />
      <h2>This is H2 tag</h2>
    </>
  );
};

// create root using createRoot

const root = ReactDOM.createRoot(document.getElementById("root"));

// passing react element inside root

//async defer
root.render(<App />);
