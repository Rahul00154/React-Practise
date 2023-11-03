import React from "react";
import "./App.css";
import State from "./components";

// const ToolBar = ({ onPlayMovie, onUpload }) => {
//   return (
//     <div className="toolBar" onClick={() => alert("toolbar clicked")}>
//       <button
//         onClick={(e) => {
//           e.stopPropagation();
//           onPlayMovie();
//         }}
//       >
//         PlayMovie
//       </button>
//       <button onClick={onUpload}>Upload Image</button>
//     </div>
//   );
// };

//preventDefault:- some events have associated with default behaviour like in form we click on submit button it reload the window automatic to prevent this behaviour we use event.prevent default.

// const SignUp = () => {
//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//         alert("submit");
//       }}
//     >
//       <input type="text" />
//       <button>Send</button>
//     </form>
//   );
// };

let stateValue;

const useState = (initialValue) => {
  if (stateValue === undefined) {
    stateValue = initialValue;
  }

  const setValue = (newValue) => {
    stateValue = newValue;
  };

  return [stateValue, setValue];
};

function App() {
  /*
   ***Here we understand how usestate work under the hood
   */

  const [countA, setCountA] = useState(1);

  return (
    <div>
      {/* <h1>Hello Learning Event Handling In react js</h1>
      <ToolBar
        onPlayMovie={() => alert("playing")}
        onUpload={() => alert("uploading")}
      /> */}

      {/* <SignUp /> */}
      {/* <State /> */}
      <div>
        <h1>Count A: {countA}</h1>
        <button onClick={() => setCountA(countA - 1)}>Subtract</button>{" "}
        <button onClick={() => setCountA(countA + 1)}>Add</button>
      </div>
      <div>
        <h1>Count B: -1</h1>
        <button>Subtract</button> <button>Add</button>
      </div>
    </div>
  );
}

export default App;

//Event Propagation :- when we perfom some event how that event behave on web page is known as event propagation it has two phase one is bubble and otherone is capture phase.
//  when a certain event that is click or submit then it bubbles or propagates to the bottom to top tree of dom.

//In react all event propagate except the onScroll
