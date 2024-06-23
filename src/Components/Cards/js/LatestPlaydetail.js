import React from "react";
import { useParams, Link } from "react-router-dom";
import "../css/LatestPlayDetail.css";
import "../css/Common.css";
import AppContainer from "../../AppContainer/AppContainer";

import card1 from "../Image/LatestPlay/card1.avif";
import card2 from "../Image/LatestPlay/card2.avif";
import card3 from "../Image/LatestPlay/card3.avif";
import card4 from "../Image/LatestPlay/card4.avif";
import card5 from "../Image/LatestPlay/card5.avif";
import card6 from "../Image/LatestPlay/card6.avif";
import card7 from "../Image/LatestPlay/card7.avif";

const cards = [
    {
        image: card1,
        date: "Sat, 30 Mar",
        title: "Oor koodi ther izhu",
        description: "Detailed description of the play.",
    },
    {
        image: card2,
        date: "Sun, 31 Mar",
        title: "Kathula Poo",
        language: "Tamil",
        description: "Detailed description of the play.",
    },
    {
        image: card3,
        date: "Sun, 7 Apr",
        title: "Vintage Classic of UAA",
        language: "Tamil",
        description: "Detailed description of the play.",
    },
    {
        image: card4,
        date: "Sat, 30 Mar",
        title: "Oor koodi ther izhu",
        language: "Tamil",
        description: "Detailed description of the play.",
    },
    {
        image: card5,
        date: "Sat, 6 Apr",
        title: "Sound Healing from Auroville",
        description: "Detailed description of the play.",
    },
    {
        image: card6,
        date: "Mon, 1 Apr onwards",
        title: "Casagrand SunDance",
        language: "English",
        description: "Detailed description of the play.",
    },
    {
        image: card7,
        date: "Sat, 30 Mar",
        title: "Stories at Sunset - Storytime for Adults",
        language: "English",
        description: "Detailed description of the play.",
    },
];

const LatestPlayDetail = () => {
    const { id } = useParams();
    const selectedCard = cards[id];

    if (!selectedCard) {
        return <div>Card not found</div>;
    }

    return (
        <div className="latest-play-detail">
            <AppContainer>
                <div className="card-detail">
                    <img src={selectedCard.image} alt={selectedCard.title} />
                    <div className="card-info">
                        <h2>{selectedCard.title}</h2>
                        <p className="date">{selectedCard.date}</p>
                        {selectedCard.language && (
                            <p className="language">{selectedCard.language}</p>
                        )}
                        <p className="description">
                            {selectedCard.description}
                        </p>
                        <Link to="/latest-play" className="back-link">
                            Back to Latest Plays
                        </Link>
                    </div>
                </div>
            </AppContainer>
        </div>
    );
};

export default LatestPlayDetail;
