import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "react-feather";
import "./index.css";
export default NavBar => {
    return (
        <nav>
            <div className="navBarLinks">
                <NavLink className="navBarItem" to="/">HOME</NavLink>
                <NavLink className="navBarItem" to="/about">ABOUT</NavLink>
                <NavLink className="navBarItem" to="/">AUTHORS</NavLink>
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
}
