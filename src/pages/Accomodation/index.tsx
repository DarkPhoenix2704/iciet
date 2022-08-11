import React from "react";
import Destination from "../../components/Destination";
import airport from "../../data/airport";
import railway from "../../data/railway";
import "./index.css";
const Accomodation = () => {
    return (
        <div className="accomodation">
            <h1>Travel & Accomodation</h1>
            <hr/>
            <h2>Nearest Airport</h2>
            <div className="airportRow">
                {
                    airport.map((place, key) => {
                        return (
                            <Destination distance={place.distance} key={key} link={place.link} image={place.image} linkContent={place.linkContent} place={place.place}/>
                            );
                    })
                }
            </div>
            <h2>Nearest Railway Station</h2>
            <div className="airportRow">
                { 
                    railway.map((place, key) => {
                        return (
                            <Destination distance={place.distance} key={key} link={place.link} image={place.image} linkContent={place.linkContent} place={place.place}/>
                            );
                    })
                }
            </div>
        </div>
    );
};
export default Accomodation;