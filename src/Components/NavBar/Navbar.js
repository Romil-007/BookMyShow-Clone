import React from "react";
import logo from "./Logo.png";
import "./NavBar.css";
import { CgSearch } from "react-icons/cg";
import { LuAlignJustify } from "react-icons/lu";
import { SlArrowDown } from "react-icons/sl";
import AppContainer from "../AppContainer/AppContainer";

function Navbar() {
    return (
        <AppContainer>
            <div className="navbar">
                <div className="navbar-left">
                    <img
                        src={logo}
                        className="brand-logo"
                        alt=""
                        style={{ height: "78px" }}
                    />
                    <div className="input">
                        <CgSearch className="search-icon" />
                        <input
                            className="search"
                            placeholder="Search for Movies, Events, Plays, Sports, and Activities"></input>
                    </div>
                </div>
                <div className="navbar-right">
                    <a href="#" className="location">
                        Navi Mumbai
                    </a>
                    <SlArrowDown className="location-down" />
                    <button className="signin">Sign in</button>
                    <a href="#" className="btn-customized open-menu">
                        <LuAlignJustify className="menu" />
                    </a>
                </div>
            </div>
        </AppContainer>
    );
}

export default Navbar;
