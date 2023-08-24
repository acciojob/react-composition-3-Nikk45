import React from "react";

const Tooltip = ({text, children})=>{
    return(
        <>
            <h2 className="tooltiptext">{children[0]}
                <div className="tooltip">{text[0]}</div>
            </h2>
            <p className="tooltiptext">{children[1]}
                <div className="tooltip">{text[1]}</div>
            </p>
        </>
    )
}

export default Tooltip