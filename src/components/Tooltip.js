import React from "react";

const Tooltip = ({text, children})=>{
    return(
        <>
            <h1 className="tooltip">{children[0]}
                <h1 className="tooltiptext">{text[0]}</h1>
            </h1>
            <p className="tooltip">{children[1]}
                <p className="tooltiptext">{text[1]}</p>
            </p>
        </>
    )
}

export default Tooltip