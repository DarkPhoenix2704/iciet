import React from "react";
import "./index.css";
import iciet from "../../assets/ICIET_Logo_White.svg";
import Track from "../../components/Track";
import DateBlock from "../../components/DateBlock";
import { NavLink } from "react-router-dom";
import dates from "../../data/dates";
import tracks from "../../data/tracks";
const Home = () => {
    return(
        <>
            <div className="container">
                <h1>International Conference on Innovation In Engineering & Technology</h1>
                <h2>Stay Tuned For Dates</h2>
                <hr/>
                <NavLink className="Btn" to="registration">Register Now</NavLink>
            </div>
            <div className="about">
                <p>
                ICIET-2022 is the International Conference organized by Ilahia College of Engineering 
                and Technology, Muvattupuzha, Kerala, India. This Conference aims to bring together the 
                Researchers, Academicians and Industrialist under a single platform to share their 
                knowledge and research experience so as to provide directions for future reasearch. 
                This Conference is an International forum for the researchers in Engineering and Technology 
                to discuss their knowlege in their areas of interest.
                </p>
                <div className="aboutCol">
                    <img src={iciet} className="aboutImg"/>
                </div>
            </div>
            <div className="tracks">
                <h1>Conference Tracks</h1>
                <h2>ICIET 2022 will have the following tracks:</h2>
                <hr/>
                <div className="trackContent">
                    {
                        tracks.map((val,key) => <Track content={val} key={key}/>)
                    }
                </div>
            </div>
            <div className="dates">
                <h1>Important Dates</h1>
                <h2></h2>
                <hr/>
                <div className="dateContent">
                    {
                        dates.map((val,key) => <DateBlock key={key} date={val.date} month={val.month} content={val.content}/>)
                    }
                </div>
            </div>
        </>

    )
};
export default Home;