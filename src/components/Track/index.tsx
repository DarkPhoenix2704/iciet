import React from "react";
import "./index.css";
const Track = ({content}: TrackProps) => {
    return (
        <div className="trackBody">
            {content}
        </div>
    );
}
interface TrackProps{
    content: string;
}
export default Track;