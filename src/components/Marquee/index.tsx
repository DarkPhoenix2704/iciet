import React from "react";
import "./index.css";
const Marquee = ({content}: MaqrueeProps) => {
    return (
        <div className="mContainer">
            <div className="marquee">
                {content}
            </div>
        </div>
    );
}
interface MaqrueeProps{
    content: string;
}
export default Marquee;