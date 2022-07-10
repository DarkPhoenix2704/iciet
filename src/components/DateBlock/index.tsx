import React from "react";
import "./index.css";
const DateBlock = (props) => {
    const date = parseInt(props.date)
    const sup = date === 1 ? "st" : (date ===2) ? "nd" : (date === 3) ? "rd" : "th"
    return (
        <div className="dateBlock">
            <h1>{props.date}<sup>{sup}</sup></h1>
            <p>{props.month}</p>
            <h3>{props.content}</h3>
        </div>
    );
}
export default DateBlock;