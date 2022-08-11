import React from "react";
import "./index.css";
import icet from "../../assets/icet.jpg";
const Organizers = () => {
    return (
        <div className="organizers">
            <h1>About Us</h1>
            <h2>Ilahia College of Engineering & Technology</h2>
            <hr/>
            <div className="row">
                <img src={icet}/>
                <p>
                Ilahia College of Engineering and Technology (ICET), Mulavoor P.O.,
                Muvattupuzha is a co-educational minority institution approved by AICTE, 
                New Delhi and affiliated to APJ Abdul Kalam Kerala Technological University 
                (KTU). The college is established in the year 2002. Within 20 years since its
                inception ICET has made many creditable achievements. 16 batches of engineering
                students have passed out from the college with academic brilliance and 
                all-round excellence and occupy positions in various corporates and
                institutions. Some of our alumni have also proved themselves as excellent
                entrepreneurs. As part of its social commitment, the college provides free
                education and Scholarship from various agencies.
                </p>
            </div>
        </div>
    );
};
export default Organizers;