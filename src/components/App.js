
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {

  let children = ["Hover over me", "Hover over me to see another tooltip"];
  let text = ["This is a tooltip","This is another tooltip"];

  return (
    <div>
        {/* Do not remove the main div */}
        <Tooltip text={text} children={children} />
    </div>
  )
}

export default App
