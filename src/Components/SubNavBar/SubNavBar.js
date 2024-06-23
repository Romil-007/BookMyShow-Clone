import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./SubNavBar.css";
import AppContainer from "../AppContainer/AppContainer";

function SubNavBar() {
    const scrollToRef = useRef(null);

    const handleScrollToMovies = (x) => {
        const scrollHeight = document.documentElement.scrollHeight;
        window.scrollTo({
            top: scrollHeight * x, // Scroll to 10% of the page height
            behavior: "smooth", // Smooth scrolling
        });
    };

    return (
        <div className="subnavbar">
            <AppContainer>
                <div className="subnav-content">
                    <div className="navitem-left">
                        {/* Use Link from react-router-dom for navigation */}
                        <Link
                            to="/"
                            className="nav-link"
                            onClick={() => {
                                handleScrollToMovies(0.05);
                            }}>
                            Movies
                        </Link>
                        <Link
                            to="/"
                            className="nav-link"
                            onClick={() => {
                                handleScrollToMovies(0.2);
                            }}>
                            Stream
                        </Link>
                        <Link
                            to="/"
                            className="nav-link"
                            onClick={() => {
                                handleScrollToMovies(0.55);
                            }}>
                            Popular Events
                        </Link>
                        <Link
                            to="/"
                            className="nav-link"
                            onClick={() => {
                                handleScrollToMovies(0.64);
                            }}>
                            Latest Plays
                        </Link>
                        <Link
                            to="/"
                            className="nav-link"
                            onClick={() => {
                                handleScrollToMovies(0.74);
                            }}>
                            Sports
                        </Link>
                        <Link
                            to="/"
                            className="nav-link"
                            onClick={() => {
                                handleScrollToMovies(0.38);
                            }}>
                            Outdoor Events
                        </Link>
                    </div>
                    <div className="navitem-right">
                        <a href="#ListYourShow">ListYourShow</a>
                        <a href="#Corporates">Corporates</a>
                        <a href="#Offers">Offers</a>
                        <a href="#GiftCards">Gift Cards</a>
                    </div>
                </div>
            </AppContainer>
        </div>
    );
}

export default SubNavBar;
