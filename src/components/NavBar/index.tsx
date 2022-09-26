import React, { MutableRefObject, ReactElement, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "react-feather";
import "./index.css";
const NavBar = () => {
    const ref = useRef<any>();
    return (
        <>
            <nav>
                <div className="navBarLinks">
                    <NavLink className="navBarItem" to="/">HOME</NavLink>
                    <div className="dropdown">
                        <button className="navBarItem">ABOUT
                        </button>
                        <div className="dropdown-content">
                            <NavLink className="navBarDropItem" to="/organizers">ORGANIZERS</NavLink>
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
                <div className="menu" onClick={ () => {
                    ref?.current?.style.display === "none" ? ref.current.style.display = "flex" : ref.current.style.display = "none"
                }}>
                    <p>
                        MENU
                    </p>
                    <Menu color="#1E1E1E" size={36} className="menuIcon"/>
                </div>
            </nav>
            <div className="mobileNav" ref={ref}>
                <NavLink className="mobileNavItem" to="/">HOME</NavLink>
                <NavLink className="mobileNavItem" to="/organizers">ORGANIZERS</NavLink>
                <NavLink className="mobileNavItem" to="/venue">VENUE</NavLink>
                <NavLink className="mobileNavItem" to="/accomodation">ACCOMODATION</NavLink>
                <NavLink className="mobileNavItem" to="/papers">CALL FOR PAPERS</NavLink>
                <NavLink className="mobileNavItem" to="/submission">SUBMISSION</NavLink>
                <NavLink className="mobileNavItem" to="/dates">IMPORTANT DATES</NavLink>
                <NavLink className="mobileNavItem" to="/committe">COMMITTE</NavLink>
                <NavLink className="mobileNavItem" to="/registration">REGISTRATION</NavLink>
                <NavLink className="mobileNavItem" to="/contact">CONTACT</NavLink>
            </div>
        </>
    );
;}
export default NavBar;