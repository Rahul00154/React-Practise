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

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading1]
);

// create root using createRoot

const root = ReactDOM.createRoot(document.getElementById("root"));

// passing react element inside root

root.render(container);
