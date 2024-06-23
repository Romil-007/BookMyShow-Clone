import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "../css/PopularEvent.css"
import "../css/Common.css"
import AppContainer from "../../AppContainer/AppContainer"
import { SlArrowLeft , SlArrowRight } from "react-icons/sl";

import card1 from "../Image/PopularEvent/card1.avif"
import card2 from "../Image/PopularEvent/card2.avif"
import card3 from "../Image/PopularEvent/card3.avif"
import card4 from "../Image/PopularEvent/card4.avif"
import card5 from "../Image/PopularEvent/card5.avif"
import card6 from "../Image/PopularEvent/card6.avif"
import card7 from "../Image/PopularEvent/card7.avif"
import card8 from "../Image/PopularEvent/card8.avif"
import card9 from "../Image/PopularEvent/card9.avif"
import card10 from "../Image/PopularEvent/card10.avif"

const cards = [
    {"image": card1, "date": "Tue, 26 Mar onwards", "title": "Play Station Center", "location": "North Town Tower 24: Chennai"},
    {"image": card2, "date": "Tue, 26 Mar onwards", "title": "Hamleys Play - Chennai", "location": "Phoenix Marketcity: Chennai"},
    {"image": card3, "date": "Thu, 28 Mar", "title": "Stand Up Comedy Open Mic", "location": "Fika: Chennai"},
    {"image": card4, "date": "Tue, 26 Mar onwards", "title": "PLAY 'N' LEARN VR Mall Chennai", "location": "Play N Learn, VR Mall: Chennai"},
    {"image": card5, "date": "Sat, 30 Mar", "title": "Easter Bash at PLAY 'N' LEARN", "location": "Play N Learn, VR Mall: Chennai"},
    {"image": card6, "date": "Sun, 31 Mar", "title": "SCC Open Air Cinema - Vinnaithaandi Varuvaaya", "location": "One Paramount: Chennai"},
    {"image": card7, "date": "Sat, 30 Mar", "title": "SCC Open Air Cinema - About Time", "location": "One Paramount: Chennai"},
    {"image": card8, "date": "Sat, 4 May", "title": "Gautham Govindan LIVE", "location": "Offbeat Music Ventures: Chennai"},
    {"image": card9, "date": "Sat, 6 Apr onwards", "title": "Navin Kumar Live : English Standup Solo", "location": "Offbeat Music Ventures: Chennai"},
    {"image": card10, "date": "Sun, 31 Mar", "title": "African Drumming & Dance Workshop", "location": "IDAM - The Art & Cultural Space: Chennai"},
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
    <div className="popular-event">
        <AppContainer>
            <div className="heading">
                <h2 className="banner-heading">Popular Events</h2>
                <a className="see-all">See All ›</a>
            </div>
            <div ref={sliderRef} className="keen-slider">
                {cards.map((card, index) => (
                    <div className="keen-slider__slide card-box">
                        <div key={index} className="card">
                            <img src={card.image} alt={`Card ${index + 1}`} />
                            <div class="card-body">
                                <p className="rating">{card.date}</p>
                            </div>
                        </div>
                        <div className="card-content">
                            <h3>{card.title}</h3>
                            <div>
                                <p class="detail">{card.location}{card.type}</p>
                                <p>{card.type}</p>
                            </div>
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
