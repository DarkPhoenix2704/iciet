import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React from "react";
import "./index.css";
const Venue = () => {
    return (
        <div className="venuePage">
            <h1>Venue</h1>
            <h2>Ilahia College of Engineering & Technology</h2>
            <hr/>
            <p>
                Ilahia Trust made a leap forward in the educational field by pioneering one of 
                the first self-financing Engineering Colleges. Ilahia College of Engineering and 
                Technology (ICET), Mulavoor P O, Muvattupuzha is a co-educational minority institution 
                approved by AICTE, New-Delhi and affiliated to APJ Abdul Kalam Kerala Technological 
                University(KTU). The college is established in the year 2002. Within 19 years since its 
                inception ICET has made many creditable achievements. 16 batches of engineering students 
                have passed out from the college with academic brilliance and all-round excellence and 
                occupy positions in various Corporates and Institutions. Some of our ALUMNI have also 
                proved themselves as excellent Entrepreneurs. As part of its social commitment, the 
                college provides free education and scholarship from various agencies. 
            </p>
            <h2>Our Vision</h2>
            <hr/>
            <p>
                To become a global technical institution of high repute by nurturing a spirit of 
                academic excellence and pursuit of advanced technical research by imparting timeless 
                core values to the learners to serve humankind.
            </p>
            <h2>Our Mission</h2>
            <hr/>
            <p>
                To transform the learners into exceptional technocrats and entrepreneurs capable of 
                meeting everchanging challenges in the global society, by continually imparting high 
                quality outcome based technical education by :
            </p>
            <ul>
                <li>
                    Incorporating best possible innovative instructional techniques.
                </li>
                <li>
                    Providing a strong academic foundation, technical skills and promoting research and development activities.
                </li>
                <li>
                    Developing leadership qualities, soft skills and building spirit for team work.
                </li>
                <li>
                    Inculcating professional ethics, critical thinking mind and positive attitude of lifelong learning.
                </li>
            </ul>
            <LoadScript googleMapsApiKey="AIzaSyAcVUpjSZSb2og3l7K6v6enQCLYdCSCIHM">
                <div className="mapComponent">
                    <GoogleMap mapContainerStyle={{width: "100%", height:"100%"}} center={{lat:10.028339,lng:76.597629}} zoom={15}>
                        <Marker position={{lat:10.028339,lng:76.597629}}/>
                    </GoogleMap>
                </div>
            </LoadScript>
        </div>
    );
};
export default Venue;