import React from "react";
import "./App.css";

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

const SignUp = () => {
  return (
    <form onSubmit={() => alert("submit")}>
      <input type="text" />
      <button>Send</button>
    </form>
  );
};

function App() {
  return (
    <>
      {/* <h1>Hello Learning Event Handling In react js</h1>
      <ToolBar
        onPlayMovie={() => alert("playing")}
        onUpload={() => alert("uploading")}
      /> */}

      <SignUp />
    </>
  );
}

export default App;

//Event Propagation :- when we perfom some event how that event behave on web page is known as event propagation it has two phase one is bubble and otherone is capture phase.
//  when a certain event that is click or submit then it bubbles or propagates to the bottom to top tree of dom.

//In react all event propagate except the onScroll
