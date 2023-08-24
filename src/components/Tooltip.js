import React from "react";

const Tooltip = ({text, children})=>{
    return(
        <>
            <h2 className="tooltip">{children[0]}
                <div className="tooltiptext">{text[0]}</div>
            </h2>
            <p className="tooltip">{children[1]}
                <div className="tooltiptext">{text[1]}</div>
            </p>
        </>
    )
}

export default Tooltip