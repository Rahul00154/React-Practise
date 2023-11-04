import React from "react";
import ReactDOM from "react-dom/client";

/*
*** The process of requesting and serving Ui hase three steps
 1. Triggering a render (when you need some variable from components)
 2. Rendering The components(in this preparing order in that components)
 3. Commiting to the dom(placing that component on browser window)

 *** Trigger A render
  * two reasons for a components to render
    1. Component initial render
    2. when some variable(state) has been updated in components or one of its ancestor
  *
  *
  * 
  * 
  * 
  * 
  * 
  *
  * *** Re-render when state updates 
  *  *if components is initially render then we can trigger further render by updating its state //
  * it means when we update the component's state it automatically queue in render
  * 
  * 
  * 
  *** STEP 2 : Rendering The Components
   * after triiger a render react calls components to figure out what to display on the screen
   *  "Rendering" in react is calling your components
*/

const Image = () => {
  return (
    <img
      src="https://i.imgur.com/ZF6s192.jpg"
      alt="'Floralis Genérica' by Eduardo Catalano: a gigantic metallic flower sculpture with reflective petals"
    />
  );
};

const App = () => {
  return (
    <>
      <h1>Learning Render AND Commit</h1>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Image />);
