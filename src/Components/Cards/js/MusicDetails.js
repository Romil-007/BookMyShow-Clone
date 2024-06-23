import React from "react";
import { useParams } from "react-router-dom";
import "../css/MusicDetails.css";

import card1 from "../Image/MusicStudio/card1.avif";
import card2 from "../Image/MusicStudio/card2.avif";
import card3 from "../Image/MusicStudio/card3.avif";
import card4 from "../Image/MusicStudio/card4.avif";
import card5 from "../Image/MusicStudio/card5.avif";
import card6 from "../Image/MusicStudio/card6.avif";
import card7 from "../Image/MusicStudio/card7.avif";
import card8 from "../Image/MusicStudio/card8.avif";
import card9 from "../Image/MusicStudio/card9.avif";
import card10 from "../Image/MusicStudio/card10.avif";

const musicDetails = [
    {
        image: card1,
        date: "Sun, 31 Mar",
        title: "Music Journey",
        location: "Vani Mahal: Chennai",
        type: "Concerts",
    },
    {
        image: card2,
        date: "Sun, 31 Mar",
        title: "Evergreen Songs of SPB",
        location: "Raja Annamalai Mandram: Chennai",
        type: "Concerts",
    },
    {
        image: card3,
        date: "Fri, 5 Apr",
        title: "QFR Live 4th Year Celebration Show",
        location: "Narada Gana Sabha Auditorium: Chennai",
        type: "Concerts",
    },
    {
        image: card4,
        date: "Sun, 31 Mar",
        title: "LITJAM CHENNAI - LIVE MUSIC JAMMING CHENNAI",
        location: "Ph Cafe (Psychedelic Hues) - Chennai",
        type: "Club Gigs",
    },
    {
        image: card5,
        date: "Wed, 3 Apr onwards",
        title: "Rhythmic Nights Ft. Barrington",
        location: "Hard Rock Cafe: Nungambakkam, Chennai",
        type: "Club Gigs",
    },
    {
        image: card6,
        date: "Thu, 4 Apr onwards",
        title: "Boogie Nights Ft. DJ Josh",
        location: "Hard Rock Cafe: Nungambakkam, Chennai",
        type: "Club Gigs",
    },
    {
        image: card7,
        date: "Fri, 5 Apr",
        title: "Funky Friday Ft. DJ Chris",
        location: "Hard Rock Cafe: Nungambakkam, Chennai",
        type: "Club Gigs",
    },
    {
        image: card8,
        date: "Sat, 6 Apr onwards",
        title: "Remix Nights Ft. DJ Chris",
        location: "Hard Rock Cafe: Nungambakkam, Chennai",
        type: "Club Gigs",
    },
    {
        image: card9,
        date: "Sat, 28 Sep",
        title: "Sunburn Arena Ft. Alan Walker",
        location: "Venue To Be Announced",
        type: "Club Gigs",
    },
    {
        image: card10,
        date: "Thu, 18 Apr",
        title: "The last Tool Tribute tour - Chennai",
        location: "Hard Rock Cafe: Nungambakkam, Chennai",
        type: "Club Gigs",
    },
];

const MusicDetails = () => {
    const { id } = useParams();
    const music = musicDetails[id];

    if (!music) {
        return <div>Music event not found</div>;
    }

    return (
        <div className="music-details-container">
            <div className="music-details-left">
                <img src={music.image} alt={music.title} />
            </div>
            <div className="music-details-right">
                <h2>{music.title}</h2>
                <p>
                    <strong>Date:</strong> {music.date}
                </p>
                <p>
                    <strong>Location:</strong> {music.location}
                </p>
                <p>
                    <strong>Type:</strong> {music.type}
                </p>
                <a href="#" className="book-tickets-btn">
                    Book Tickets
                </a>
            </div>
        </div>
    );
};

export default MusicDetails;
