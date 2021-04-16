import React from "react";

const button = (props) => {

    const btnCss = `${props.btnType}`

    return(
    <div className="button">
        <button className={btnCss} onClick={props.clic}> {props.children} </button>
    </div>
)};


export default button;