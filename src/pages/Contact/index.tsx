import React from "react";
import "./index.css";
const Contact = () => {
    return (
        <div className="contactPage">
            <h1>Contact Us</h1>
            <h2>Feel free to ping us for any queries</h2>
            <hr/>
            <div className="row1">
                <p>
                    Ilahia College of Engineering & Technology <br/>
                    Mulavoor, Muvattupuzha, 686673<br/>
                    Email : ilahia@icet.ac.in<br/>
                    Phone : 4852549145<br/>
                </p>
            </div>
            <div className="row2">
                <p>
                    Rosna P Haroon <br/>
                    Organizer <br/>
                    rosnapharoon@icet.ac.in <br/>
                    +919845621564 <br/>
                </p>
                <p>
                    Ansar Jamal <br/>
                    Co-Organizer <br/>
                    ansarjamal@icet.ac.in <br/>
                    +919845621564 <br/>
                </p>
            </div>
        </div>
    );
};
export default Contact;