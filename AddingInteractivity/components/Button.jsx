import React from "react";

// const handleClick = () => {
//   alert("You Clicked me");
// };
// export default function Button() {
//   return <button onClick={handleClick}>I dont do anything</button>;
// }

//Reading Props in event Handler

function AlertButton({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}

export default function ToolBar() {
  return (
    <div>
      <AlertButton message="GuluGulu">GuluGulu</AlertButton>
      {/* //here we pass
      message nd children as props lik playing is message and paly movie use as
      children */}
      <AlertButton message={"Uploading"}>Upload Image</AlertButton>
    </div>
  );
}
