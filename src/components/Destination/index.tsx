import React, { ReactNode } from "react";
import { Link, To } from "react-router-dom";
import "./index.css";
const Destination = (props) => {
    return (
        <div className="destCard">
            {props.image && <img src={props.image} />}
            <h2>{props.place}</h2>
            <p>{props.distance}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer" className="link">{props.linkContent}</a>
        </div>
    );
}
export default Destination;