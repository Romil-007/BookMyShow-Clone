// TopGames.js

import React from "react";
import { Link } from "react-router-dom";
import "../css/TopGames.css";
import "../css/Common.css";
import AppContainer from "../../AppContainer/AppContainer";

import card1 from "../Image/TopGame/card1.avif";
import card2 from "../Image/TopGame/card2.avif";
import card3 from "../Image/TopGame/card3.avif";
import card4 from "../Image/TopGame/card4.avif";
import card5 from "../Image/TopGame/card5.avif";
import card6 from "../Image/TopGame/card6.avif";
import card7 from "../Image/TopGame/card7.avif";
import card8 from "../Image/TopGame/card8.avif";
import card9 from "../Image/TopGame/card9.avif";
import card10 from "../Image/TopGame/card10.avif";

const cards = [
    {
        image: card1,
        date: "Thu, 28 Mar",
        title: "Rajasthan Royals vs Delhi Capitals",
        location: "Sawai Mansingh Stadium: Jaipur",
        type: "Cricket",
    },
    {
        image: card2,
        date: "Thu, 4 Apr",
        title: "Chennaiyin FC vs Jamshedpur FC",
        location: "Jawaharlal Nehru Stadium: Chennai",
        type: "Football",
    },
    {
        image: card3,
        date: "Sun, 28 Apr",
        title: "Marathon On World Health Day",
        location: "Olcott Memorial High School: Chennai",
        type: "Marathon",
    },
    {
        image: card4,
        date: "Sun, 6 Oct",
        title: "The Great Inflate Run - Chennai",
        location: "Venue To Be Announced: Chennai",
        type: "Fun Run",
    },
    {
        image: card5,
        date: "Thu, 26 Mar",
        title: "India vs Afghanistan - FIFA World Cup Qualifier 2026",
        location: "Indira Gandhi Athletic Stadium: Guwahati",
        type: "Football",
    },
    {
        image: card6,
        date: "Thu, 9 Apr",
        title: "Chennaiyin FC vs NorthEast United FC",
        location: "Jawaharlal Nehru Stadium: Chennai",
        type: "Football",
    },
    {
        image: card7,
        date: "Sun, 7 Apr",
        title: "Lucknow Super Giants vs Gujarat Titans",
        location: "BRSABV Ekana Cricket Stadium: Lucknow",
        type: "Cricket",
    },
    {
        image: card8,
        date: "Mon, 1 Apr",
        title: "Mumbai Indians VS Rajasthan Royals",
        location: "Wankhede Stadium: Mumbai",
        type: "Cricket",
    },
    {
        image: card9,
        date: "Mon, 1 Jul",
        title: "21 Days Walking Challenge by Malsar.in",
        location: "Your Place and Your Time",
        type: "Health",
    },
    {
        image: card10,
        date: "Sun, 14 Apr",
        title: "Run for Equality - Get Medal by Courier",
        location: "Your Place and Your Time",
        type: "Equality",
    },
];

const TopGames = () => {
    return (
        <div className="top-games">
            <AppContainer>
                <div className="heading">
                    <h2 className="banner-heading">Top Games & Sport Events</h2>
                    <Link to="/" className="see-all">
                        See All ›
                    </Link>
                </div>
                <div className="card-list">
                    {cards.map((card, index) => (
                        <Link
                            key={index}
                            to={`/top-game-details/${index}`}
                            className="card-box">
                            <div className="card">
                                <img
                                    src={card.image}
                                    alt={`Card ${index + 1}`}
                                />
                                <div className="card-body">
                                    <p className="rating">{card.date}</p>
                                </div>
                            </div>
                            <div className="card-content">
                                <h3>{card.title}</h3>
                                <p className="detail">{card.location}</p>
                                <p>{card.type}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </AppContainer>
        </div>
    );
};

export default TopGames;
