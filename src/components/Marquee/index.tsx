import React from "react";
import "./index.css";
const Marquee = (props) => {
    return (
        <div className="mContainer">
            <div className="marquee">
                {props.content}
            </div>
        </div>
    );
}

export default Marquee;