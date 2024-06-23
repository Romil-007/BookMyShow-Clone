import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { SlArrowLeft , SlArrowRight } from "react-icons/sl";

import "./Banner.css";
import banner1 from "./Image/banner1.avif";
import banner2 from "./Image/banner2.avif";
import banner3 from "./Image/banner3.avif";
import banner4 from "./Image/banner4.avif";
import banner5 from "./Image/banner5.avif";

const images = [banner1, banner2, banner3, banner4, banner5];

export default () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
    loop: true,
    slides: {
      origin: "center",
      perView: 1.2,
      spacing: 15,
    },
  },
  [
    (slider) => {
      let timeout
      let mouseOver = false
      function clearNextTimeout() {
        clearTimeout(timeout)
      }
      function nextTimeout() {
        clearTimeout(timeout)
        if (mouseOver) return
        timeout = setTimeout(() => {
          slider.next()
        }, 2000)
      }
      slider.on("created", () => {
        slider.container.addEventListener("mouseover", () => {
          mouseOver = true
          clearNextTimeout()
        })
        slider.container.addEventListener("mouseout", () => {
          mouseOver = false
          nextTimeout()
        })
        nextTimeout()
      })
      slider.on("dragStarted", clearNextTimeout)
      slider.on("animationEnded", nextTimeout)
      slider.on("updated", nextTimeout)
    },
  ]);

  return (
    <div className="navigation-wrapper">
      <div ref={sliderRef} className="keen-slider banner">
        {images.map((image, index) => (
          <div key={index} className="keen-slider__slide">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      {loaded && instanceRef.current && (
          <>
            <div 
            className="arrow-left"
            onClick={(e) => {
              e.stopPropagation();
              instanceRef.current.prev();
            }}>
              <SlArrowLeft className="arrow--left" />
            </div>

            <div className="arrow-right"
            onClick={(e) => {
              e.stopPropagation();
              instanceRef.current.next();
            }}>
              <SlArrowRight className="arrow--right"/>
            </div>
          </>
        )}
        {loaded && instanceRef.current && (
          <div className="dots">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx)
                  }}
                  className={"dot" + (currentSlide === idx ? " active" : "")}
                ></button>
              )
            })}
          </div>
        )}
    </div>
  );
};

