import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../css/RecommendedMovieCard.css";
import "../css/Common.css";
import AppContainer from "../../AppContainer/AppContainer";
import { FaStar } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Link } from "react-router-dom";

import poster from "../Image/Poster/poster.avif"

import card1 from "../Image/RecommendedMovie/card1.avif"
import card2 from "../Image/RecommendedMovie/card2.avif"
import card3 from "../Image/RecommendedMovie/card3.avif"
import card4 from "../Image/RecommendedMovie/card4.avif"
import card5 from "../Image/RecommendedMovie/card5.avif"
import card6 from "../Image/RecommendedMovie/card6.avif"
import card7 from "../Image/RecommendedMovie/card7.avif"
import card8 from "../Image/RecommendedMovie/card8.avif"
import card9 from "../Image/RecommendedMovie/card9.avif"
import card10 from "../Image/RecommendedMovie/card10.avif"

const cards = [
    {"image": card1, "type": "like", "rating": 9.4, "votes": "146.7K", "title": "Manjummel Boys", "genre": "Adventure/Drama/Thriller"},
    {"image": card2, "type": "like", "rating": 8.6, "votes": "10K", "title": "Kung Fu Panda 4", "genre": "Action/Adventure/Animation/Comedy"},
    {"image": card3, "type": "interest", "rating": 0, "votes": "126.7K", "title": "Godzilla x Kong: The New Empire", "genre": "Action/Sci-Fi/Thriller"},
    {"image": card4, "type": "like", "rating": 8, "votes": "80.7K", "title": "Shaitaan", "genre": "Supernatural/Thriller"},
    {"image": card5, "type": "like", "rating": 9.2, "votes": "96.3K", "title": "Premalu", "genre": "Comedy/Romantic"},
    {"image": card6, "type": "like", "rating": 9.1, "votes": "32K", "title": "Dune: Part Two", "genre": "Action/Adventure/Drama/Sci-Fi"},
    {"image": card7, "type": "like", "rating": 8.1, "votes": "10.4K", "title": "Lover", "genre": "Drama/Romantic"},
    {"image": card8, "type": "like", "rating": 8.2, "votes": "14.7K", "title": "Yodha", "genre": "Action/Thriller"},
    {"image": card9, "type": "like", "rating": 9.3, "votes": "112.8K", "title": "Article 370", "genre": "Drama/Political"},
    {"image": card10, "type": "like", "rating": 8.4, "votes": "1.2K", "title": "J Baby", "genre": "Drama/Family"},
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
    <>
    <div className="recommended-movie">
        <AppContainer>
            <div className="heading">
                <h2 className="banner-heading">Recommended Movies</h2>
                <a className="see-all">See All ›</a>
            </div>
            <div ref={sliderRef} className="keen-slider">
                {cards.map((card, index) => (
                    <div key={index} className="keen-slider__slide card-box">
                        <Link to={`/movie/${encodeURIComponent(card.title)}`} className="card-link">
                            <div className="card">
                                <img src={card.image} alt={`Card ${index + 1}`} />
                                <div className="card-body">
                                    {card.type === "like" ? (
                                        <>
                                            <div className="like">
                                                <p className="icon" style={{ color: "#de334a" }}><FaStar /></p>
                                                <p className="rating">{card.rating}/10</p>
                                            </div>
                                            <p className="votes">{card.votes} Votes</p>
                                        </>
                                    ) : 
                                    (
                                        <div className="like">
                                            <p className="icon" style={{ color: "#1ca63c"}}><AiFillLike /></p>
                                            <p className="votes">{card.votes} Likes</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="card-content">
                                <h3>{card.title}</h3>
                                <p className="detail">{card.genre}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            {loaded && instanceRef.current && (
            <>
                <div 
                className={`card-arrow-left ${currentSlide === 0 ? "arrow--disabled" : ""}`}
                onClick={(e) => {
                    e.stopPropagation();
                    instanceRef.current.prev();
                }}
                >
                    <SlArrowLeft className="arrow--left" />
                </div>

                <div 
                className={`card-arrow-right ${currentSlide === cards.length - 5 ? "arrow--disabled" : ""}`}
                onClick={(e) => {
                    e.stopPropagation();
                    instanceRef.current.next();
                }}
                >
                    <SlArrowRight className="arrow--right" />
                </div>
            </>
            )}
        </AppContainer>
    </div>
    <AppContainer>
        <div className="poster">
            <img src={poster} alt="poster" />
        </div>
    </AppContainer>
    </>
  )
}
