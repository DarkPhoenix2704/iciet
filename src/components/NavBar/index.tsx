import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "react-feather";
import "./index.css";
const NavBar = () => {
    return (
        <nav>
            <div className="navBarLinks">
                <NavLink className="navBarItem" to="/">HOME</NavLink>
                <div className="dropdown">
                    <button className="navBarItem">ABOUT
                    </button>
                    <div className="dropdown-content">
                        <NavLink className="navBarDropItem" to="/venue">VENUE</NavLink>
                        <NavLink className="navBarDropItem" to="/accomodation">ACCOMODATION</NavLink>
                    </div>    
                </div>
                <div className="dropdown">
                    <button className="navBarItem">AUTHORS
                    </button>
                    <div className="dropdown-content">
                        <NavLink className="navBarDropItem" to="/papers">CALL FOR PAPERS</NavLink>
                        <NavLink className="navBarDropItem" to="/submission">SUBMISSION</NavLink>
                        <NavLink className="navBarDropItem" to="/dates">IMPORTANT DATES</NavLink>
                    </div>    
                </div>
                <NavLink className="navBarItem" to="/committe">COMMITTE</NavLink>
                <NavLink className="navBarItem" to="/registration">REGISTRATION</NavLink>
                <NavLink className="navBarItem" to="/contact">CONTACT</NavLink>
            </div>
            <div className="menu">
                <p>
                    MENU
                </p>
                <Menu color="#1E1E1E" size={36} className="menuIcon"/>
            </div>
        </nav>
    );
;}
export default NavBar;