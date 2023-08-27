
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {

  return (
    <div>
        {/* Do not remove the main div */}
        <Tooltip text="This is a tooltip">
        <h1 className="tooltip">Hover over me</h1>
      </Tooltip>
      
      <Tooltip text="This is another tooltip">
        <p className="tooltip">Hover over me to see another tooltip</p>
      </Tooltip>
    </div>
  )
}

export default App
