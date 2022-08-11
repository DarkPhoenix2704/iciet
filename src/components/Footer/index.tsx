import React from "react";
import "./index.css";
import iciet from "../../assets/ICIET_Logo_White.svg";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="row">
                <div className="column">
                    <img src={iciet}/>
                </div>
                <div className="column">
                    <h3>Important Links</h3>
                    <Link className="link" to="papers"> Call For Papers </Link>
                    <Link className="link" to="submission"> Important Dates </Link>
                    <Link className="link" to="dates"> Submission </Link>
                </div>
                <div className="column">
                    <h3>Contact</h3>
                    <a href="https://wa.me/+919995142683">
                        Rosna P Haroon
                    </a>
                    <a href="https://wa.me/+919447376898">
                        Ansar Jamal
                    </a>
                </div>
            </div>
            <div className="rowCol">
                Built with ❤️ by Anbarasu
            </div>
        </div>
    );
};
export default Footer;