import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "../css/Premiere.css"
import "../css/Common.css";
import AppContainer from "../../AppContainer/AppContainer"
import { SlArrowLeft , SlArrowRight } from "react-icons/sl";

import poster from "../Image/Poster/premiere.avif"

import card1 from "../Image/Premiere/card1.avif"
import card2 from "../Image/Premiere/card2.avif"
import card3 from "../Image/Premiere/card3.avif"
import card4 from "../Image/Premiere/card4.avif"
import card5 from "../Image/Premiere/card5.avif"
import card6 from "../Image/Premiere/card6.avif"
import card7 from "../Image/Premiere/card7.avif"
import card8 from "../Image/Premiere/card8.avif"

const cards = [
    {"image": card1, "premiere": "true", "title": "Hushhh", "language": "Hindi"},
    {"image": card2, "premiere": "true", "title": "Chupkotha", "language": "Bengali"},
    {"image": card3, "premiere": "true", "title": "Infinity", "language": "Tamil"},
    {"image": card4, "premiere": "true", "title": "Freud`s Last Session", "language": "English"},
    {"image": card5, "premiere": "true", "title": "The Kingdom Exodus: Season 3", "language": "Danish"},
    {"image": card6, "premiere": "true", "title": "Muzzle", "language": "English"},
    {"image": card7, "premiere": "true", "title": "Dinosaurs", "language": "Tamil"},
    {"image": card8, "premiere": "false", "title": "The Legend of Muay Thai: 9 Satra", "language": "Thai"},
]

export default () => {
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
    dragStart: null,
    dragEnd: null,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  });

  return (
    <div className="premiere">
        <AppContainer>
            <div className="poster">
                <img src={poster} alt="poster" />
            </div>
            <div className="heading">
                <h2 className="banner-heading">Premieres</h2>
                <p className="banner-para">Brand new releases every Friday</p>
            </div>
            <div ref={sliderRef} className="keen-slider">
                {cards.map((card, index) => (
                    <div className="keen-slider__slide card-box">
                        <div key={index} className="card">
                            <img src={card.image} alt={`Card ${index + 1}`} />
                            <div className={`card-body ${card.premiere === "false" ? "tag--disabled" : ""}`}>
                              <h1>PREMIERE</h1>
                            </div>
                        </div>
                        <div className="card-content">
                            <h3>{card.title}</h3>
                            <p class="detail">{card.language}</p>
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
