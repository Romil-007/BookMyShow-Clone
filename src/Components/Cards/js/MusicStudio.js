import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../css/MusicStudio.css";
import "../css/Common.css";
import AppContainer from "../../AppContainer/AppContainer";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

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

const cards = [
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

export default () => {
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
        <div className="music-studio">
            <AppContainer>
                <div className="heading">
                    <h2 className="banner-heading">Your Music Studio</h2>
                    <a className="see-all">See All ›</a>
                </div>
                <div ref={sliderRef} className="keen-slider">
                    {cards.map((card, index) => (
                        <div
                            className="keen-slider__slide card-box"
                            key={index}>
                            <Link
                                to={`/music-details/${index}`}
                                className="card">
                                <img
                                    src={card.image}
                                    alt={`Card ${index + 1}`}
                                />
                                <div className="card-body">
                                    <p className="rating">{card.date}</p>
                                </div>
                                <div className="card-content">
                                    <h3>{card.title}</h3>
                                    <div>
                                        <p className="detail">
                                            {card.location}
                                            {card.type}
                                        </p>
                                        <p>{card.type}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
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
