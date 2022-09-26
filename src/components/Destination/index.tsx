import React, { ReactNode } from "react";
import { Link, To } from "react-router-dom";
import "./index.css";
const Destination = ({image, place, distance, link, linkContent}: DestinationProps) => {
    return (
        <div className="destCard">
            {image && <img src={image} />}
            <h2>{place}</h2>
            <p>{distance}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="link">{linkContent}</a>
        </div>
    );
}
interface DestinationProps{
    image: any;
    place: string;
    distance: string;
    link: string;
    linkContent: string
}
export default Destination;