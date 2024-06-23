import React from "react";
import { Link } from "react-router-dom";
import "../css/NearbyTheatres.css";
import AppContainer from "../../AppContainer/AppContainer";

const theaters = [
    {
        name: "Little World Kharghar",
        showtimes: ["10:00 AM", "1:00 PM", "4:00 PM"],
    },
    {
        name: "Nexus SeaWoods",
        showtimes: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"],
    },
    {
        name: "Phoenix Mall Kurla",
        showtimes: ["9:30 AM", "12:30 PM", "3:30 PM", "6:30 PM"],
    },
];

const NearbyTheatres = () => {
    return (
        <div className="nearby-theatres">
            <AppContainer>
                <h2 className="theatres-heading">Nearby Theatres</h2>
                <div className="theatres-list">
                    {theaters.map((theatre, index) => (
                        <div key={index} className="theatre">
                            <h3>{theatre.name}</h3>
                            <div className="showtimes">
                                {theatre.showtimes.map((time, idx) => (
                                    <Link
                                        key={idx}
                                        to={`/select-seats/${
                                            theatre.name
                                        }/${encodeURIComponent(time)}`}
                                        className="showtime-link">
                                        <span className="showtime">{time}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </AppContainer>
        </div>
    );
};

export default NearbyTheatres;
