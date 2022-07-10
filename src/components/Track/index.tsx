import React from "react";
import "./index.css";
const Track = (props) => {
    return (
        <div className="trackBody">
            {props.content}
        </div>
    );
}
export default Track;