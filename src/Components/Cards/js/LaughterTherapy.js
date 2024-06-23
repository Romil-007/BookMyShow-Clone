import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "../css/LaughterTherapy.css"
import "../css/Common.css"
import AppContainer from "../../AppContainer/AppContainer"
import { SlArrowLeft , SlArrowRight } from "react-icons/sl";

import card1 from "../Image/LaughterTherapy/card1.avif"
import card2 from "../Image/LaughterTherapy/card2.avif"
import card3 from "../Image/LaughterTherapy/card3.avif"
import card4 from "../Image/LaughterTherapy/card4.avif"
import card5 from "../Image/LaughterTherapy/card5.avif"
import card6 from "../Image/LaughterTherapy/card6.avif"
import card7 from "../Image/LaughterTherapy/card7.avif"
import card8 from "../Image/LaughterTherapy/card8.avif"
import card9 from "../Image/LaughterTherapy/card9.avif"
import card10 from "../Image/LaughterTherapy/card10.avif"

const cards = [
    {"image": card1, "date": "Sun, 14 Apr", "title": "Death by Laughter ft. Vivek Muralidharan", "location": "Fika: Chennai"},
    {"image": card2, "date": "Sate, 6 Apr", "title": "SO mini THINGS! - Aiyyo Shraddha World Tour 2024", "location": "Sir Mutha Venkatasubba Rao Concert Hall: Chennai"},
    {"image": card3, "date": "Sun, 31 Mar", "title": "Moving On - Mervyn Rozz Live -Tamil Standup", "location": "Medai - The Stage, Alwarpet: Chennai"},
    {"image": card4, "date": "Sun, 7 Apr", "title": "JOKES FOR REELS - A TAMIL STANDUP COMEDY SHOW", "location": "Offbeat Music Ventures: Chennai"},
    {"image": card5, "date": "Sat, 6 Apr", "title": "KD Live Tester Show", "location": "Fika: Chennai"},
    {"image": card6, "date": "Sat, 30 Mar onwards", "title": "MADRAS COMEDY SHOW", "location": "Fika: Chennai"},
    {"image": card7, "date": "Sat, 13 Jul", "title": "JAGANE THANDHIRAM - A TAMIL STANDUP SHOW", "location": "Music Academy: Chennai"},
    {"image": card8, "date": "Mon, 1 Apr onwards", "title": "Ara-Gora Comedy Open Mic Nights", "location": "BurgerMan Nungambakkam: Chennai"},
    {"image": card9, "date": "Sat, 1 Feb", "title": "Abhishek Upmanyu LIVE 2025 - Chennai", "location": "Sir Mutha Venkatasubba Rao Concert Hall: Chennai"},
    {"image": card10, "date": "Sun, 14 Apr", "title": "Twinsanity", "location": "Fika: Chennai"},
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
    <div className="laughter-therapy">
        <AppContainer>
            <div className="heading">
                <h2 className="banner-heading">Laughter Therapy</h2>
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
