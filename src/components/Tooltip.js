import React, { useState } from "react";

const Tooltip = ({text, children})=>{

    const [visible1,setVisible1] = useState(false);
    const [visible2,setVisible2] = useState(false);

    const show=(e)=>{
        // console.log(e.target.children);
        console.log('mouse enter');
        e.target.id==='1' && setVisible1(true)
        e.target.id==='2' && setVisible2(true)
    }

    const hide=(e)=>{
        console.log('mouse leave');
        e.target.id==='1' && setVisible1(false);
        e.target.id==='2' && setVisible2(false);
    }

    

    return(
        <>
            <h2 id="1" className="tooltip" onMouseLeave={hide} onMouseEnter={show}>{children[0]}
                {
                    visible1 && <div className="tooltiptext" >{text[0]}</div>
                }
            </h2>
            <div id="2" className="tooltip" onMouseLeave={hide} onMouseEnter={show}>{children[1]}
                {
                   visible2 && <div className="tooltiptext">{text[1]}</div>
                }
            </div>
        </>
    )
}

export default Tooltip