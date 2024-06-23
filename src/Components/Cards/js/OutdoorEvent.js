import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "../css/OutdoorEvent.css"
import "../css/Common.css"
import AppContainer from "../../AppContainer/AppContainer"
import { SlArrowLeft , SlArrowRight } from "react-icons/sl";

import card1 from "../Image/OutdoorEvent/card1.avif"
import card2 from "../Image/OutdoorEvent/card2.avif"
import card3 from "../Image/OutdoorEvent/card3.avif"
import card4 from "../Image/OutdoorEvent/card4.avif"
import card5 from "../Image/OutdoorEvent/card5.avif"
import card6 from "../Image/OutdoorEvent/card6.avif"
import card7 from "../Image/OutdoorEvent/card7.avif"
import card8 from "../Image/OutdoorEvent/card8.avif"
import card9 from "../Image/OutdoorEvent/card9.avif"
import card10 from "../Image/OutdoorEvent/card10.avif"

const cards = [
    {"image": card1, "date": "Sat, 30 Mar", "title": "Lucknow Super Giants vs Punjab Kings", "location": "BRSABV Ekana Cricket Stadium: Lucknow"},
    {"image": card2, "date": "Mon, 1 Apr", "title": "Mumbai Indians VS Rajasthan Royals", "location": "Wankhede Stadium: Mumbai"},
    {"image": card3, "date": "Thu, 4 Apr", "title": "Chennaiyin FC vs Jamshedpur FC", "location": "Jawaharlal Nehru Stadium: Chennai"},
    {"image": card4, "date": "Sun, 7 Apr", "title": "Lucknow Super Giants vs Gujarat Titans", "location": "BRSABV Ekana Cricket Stadium: Lucknow"},
    {"image": card5, "date": "Thu, 26 Mar onwards", "title": "PLAY 'N' LEARN VR Mall Chennai", "location": "Play N Learn, VR Mall: Chennai"},
    {"image": card6, "date": "Thu, 26 Mar onwards", "title": "Snow Kingdom Chennai", "location": "VGP Universal Kingdom: Chennai"},
    {"image": card7, "date": "Thu, 26 Mar", "title": "India vs Afghanistan - FIFA World Cup Qualifier 2026", "location": "Indira Gandhi Athletic Stadium: Guwahati"},
    {"image": card8, "date": "Mon, 8 Apr", "title": "Mumbai City FC vs Odisha FC", "location": "Mumbai Football Arena: Andheri West"},
    {"image": card9, "date": "Sat, 30 Mar onwards", "title": "Hamleys Easter Hunt", "location": "Phoenix Marketcity: Chennai"},
    {"image": card10, "date": "Thu, 26 Mar onwards", "title": "Sky Jumper Trampoline Park - Chennai", "location": "SkyJumper Trampoline Park: Chennai"},
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
    <div className="outdoor-event">
        <AppContainer>
            <div className="heading">
                <h2 className="banner-heading">Outdoor Events</h2>
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
