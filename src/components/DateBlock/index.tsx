import React from "react";
import "./index.css";
const DateBlock = ({date, month, content}: DateBlockProps) => {
    const dateD = date
    const sup = dateD === 1 ? "st" : (dateD ===2) ? "nd" : (dateD === 3) ? "rd" : "th"
    return (
        <div className="dateBlock">
            <h1>{date}<sup>{sup}</sup></h1>
            <p>{month}</p>
            <h3>{content}</h3>
        </div>
    );
}
interface DateBlockProps{
    date: number;
    month: string;
    content: string
}
export default DateBlock;