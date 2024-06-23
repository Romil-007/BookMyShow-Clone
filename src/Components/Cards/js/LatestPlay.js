import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../css/LatestPlay.css";
import "../css/Common.css";
import AppContainer from "../../AppContainer/AppContainer";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Link } from "react-router-dom";

import card1 from "../Image/LatestPlay/card1.avif";
import card2 from "../Image/LatestPlay/card2.avif";
import card3 from "../Image/LatestPlay/card3.avif";
import card4 from "../Image/LatestPlay/card4.avif";
import card5 from "../Image/LatestPlay/card5.avif";
import card6 from "../Image/LatestPlay/card6.avif";
import card7 from "../Image/LatestPlay/card7.avif";

const cards = [
    { image: card1, date: "Sat, 30 Mar", title: "Oor koodi ther izhu" },
    {
        image: card2,
        date: "Sun, 31 Mar",
        title: "Kathula Poo",
        language: "Tamil",
    },
    {
        image: card3,
        date: "Sun, 7 Apr",
        title: "Vintage Classic of UAA",
        language: "Tamil",
    },
    {
        image: card4,
        date: "Sat, 30 Mar",
        title: "Oor koodi ther izhu",
        language: "Tamil",
    },
    { image: card5, date: "Sat, 6 Apr", title: "Sound Healing from Auroville" },
    {
        image: card6,
        date: "Mon, 1 Apr onwards",
        title: "Casagrand SunDance",
        language: "English",
    },
    {
        image: card7,
        date: "Sat, 30 Mar",
        title: "Stories at Sunset - Storytime for Adults",
        language: "English",
    },
];

const LatestPlay = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider({
        breakpoints: {
            "(min-width: 400px)": {
                slides: { perView: 5, spacing: 30 },
            },
            "(min-width: 1000px)": {
                slides: { perView: 5, spacing: 30 },
            },
        },
        slides: { perView: 5 },
        initial: 0,
        dragStart: null,
        dragEnd: null,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
    });

    return (
        <div className="latest-play">
            <AppContainer>
                <div className="heading">
                    <h2 className="banner-heading">The Latest Plays</h2>
                </div>
                <div ref={sliderRef} className="keen-slider">
                    {cards.map((card, index) => (
                        <Link
                            to={`/latest-play/${index}`}
                            key={index}
                            className="keen-slider__slide card-box">
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
                                <div>
                                    <p className="detail">
                                        {card.language}
                                        {card.type}
                                    </p>
                                    <p>{card.type}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                {loaded && instanceRef.current && (
                    <>
                        <div
                            className={`card-arrow-left ${
                                currentSlide === 0 ? "arrow--disabled" : ""
                            }`}
                            onClick={(e) => {
                                e.stopPropagation();
                                instanceRef.current.moveToIdx(0);
                            }}>
                            <SlArrowLeft className="arrow--left" />
                        </div>

                        <div
                            className={`card-arrow-right ${
                                currentSlide === cards.length - 5
                                    ? "arrow--disabled"
                                    : ""
                            }`}
                            onClick={(e) => {
                                e.stopPropagation();
                                instanceRef.current.moveToIdx(cards.length - 5);
                            }}>
                            <SlArrowRight className="arrow--right" />
                        </div>
                    </>
                )}
            </AppContainer>
        </div>
    );
};

export default LatestPlay;
