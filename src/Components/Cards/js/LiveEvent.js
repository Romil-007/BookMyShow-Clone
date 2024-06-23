import React, { useState } from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import AppContainer from "../../AppContainer/AppContainer"
import { SlArrowLeft , SlArrowRight } from "react-icons/sl";
import "../css/LiveEvent.css";
import "../css/Common.css";

import card1 from "../Image/LiveEvent/card1.avif"
import card2 from "../Image/LiveEvent/card2.avif"
import card3 from "../Image/LiveEvent/card3.avif"
import card4 from "../Image/LiveEvent/card4.avif"
import card5 from "../Image/LiveEvent/card5.avif"
import card6 from "../Image/LiveEvent/card6.avif"
import card7 from "../Image/LiveEvent/card7.avif"

const cards = [card1, card2, card3, card4, card5, card6, card7]

function LiveEvent() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
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
        slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
        },
        created() {
        setLoaded(true)
        },
    });
    
  return (
    <div className="live-event">
        <AppContainer>
            <div className="heading">
                <h2 className="banner-heading">The Best Of Live Events</h2>
            </div>
            <div ref={sliderRef} className="keen-slider">
                {cards.map((card, index) => (
                    <div className="keen-slider__slide card-box">
                        <div key={index} className="card">
                            <img src={card} alt={`Card ${index + 1}`} />
                        </div>
                    </div>
                ))}
            </div>
            {loaded && instanceRef.current && (
            <>
                <div 
                className={`card-arrow-left ${currentSlide === 0 ? "arrow--disabled" : ""}`}
                onClick={(e) => {
                    e.stopPropagation();
                    instanceRef.current.moveToIdx(0);
                }}
                >
                    <SlArrowLeft className="arrow--left" />
                </div>

                <div 
                className={`card-arrow-right ${currentSlide === cards.length - 5 ? "arrow--disabled" : ""}`}
                onClick={(e) => {
                    e.stopPropagation();
                    instanceRef.current.moveToIdx(cards.length - 5);
                }}
                >
                    <SlArrowRight className="arrow--right" />
                </div>
            </>
            )}
        </AppContainer>
    </div>
  )
}

export default LiveEvent
