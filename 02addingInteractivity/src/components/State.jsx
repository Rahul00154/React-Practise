import React, { useState } from "react";
import { sculptureList } from "./data";

//State :- it is just like defining variable in react that can changes with time when we have perform some operation like if user type in input field that is store in state to update or something like when components need to remember things like current input or current image.

//Hooks are basically a function that are only available while react is rendering

//when we used useState  we are telling react that we want this component to remember something

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  // let index = 0;

  /***
   *
   *
   * Everytime when components renders useState gives us an array containing two values
   * state variable and other one is the state setter function
   *
   *
   * In this handleClick  it is updating the local variable ,index
   * But Local variable don't persists between renders
   * any changes made in local variable won't trigger render
   *
   *
   *** TO UPDATE A COMPONENT WITH NEW DATA TWO THINGS NEED TO REMEMBER
   *
   * Remembers the data between renders
   * And trigger react to render the component with new data
   *
   *
   * *** UseState Hook is useful here
   * because it provide a state to remember the data between renders
   * and a state setter function to update the vatiable and trigger react to render the component again
   *
   *
   * WE CAN ALSO GIVE MULTIPLE STATE VARIABLE TO A COMPONENTS
   *
   */

  function handleMoreClick() {
    setShowMore(!showMore); //Here we change state variable if true then convert it into false else false to true
  }

  function handleClick() {
    setIndex(index + 1);
    // index = index + 1;
    console.log(index);
  }
  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name}</i>
        by{sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
};

function State() {
  return <Gallery />;
}

export default State;
