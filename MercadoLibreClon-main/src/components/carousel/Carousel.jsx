import "./carousel.css"
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      img: "https://http2.mlstatic.com/D_NQ_783558-MLA53400410081_012023-OO.webp"
    },
    {
      id: 2,
      img: "https://http2.mlstatic.com/D_NQ_889476-MLA53449503654_012023-OO.webp"
    },
    {
      id: 3,
      img: "https://http2.mlstatic.com/D_NQ_691402-MLA53441096269_012023-OO.webp"
    },
    {
        id: 4,
        img: "https://http2.mlstatic.com/D_NQ_704823-MLA53394769410_012023-OO.webp"
      },
      {
        id: 5,
        img: "https://http2.mlstatic.com/D_NQ_815361-MLA53447555353_012023-OO.webp"
      },
      {
        id: 6,
        img: "https://http2.mlstatic.com/D_NQ_836153-MLA53383077278_012023-OO.webp"
      }
  ];

  function goToSlide(index) {
    setCurrentSlide(index);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      goToSlide((currentSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentSlide, slides]);

  return (
    <div id="carousel">
    <NavLink className={"links-carousel"}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}
        >
      <button onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)} className="btns-carousel btn btn-back">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>
      </button>
          <img src={slide.img}/>
      <button onClick={() => goToSlide((currentSlide + 1) % slides.length)} className="btns-carousel btn btn-next">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </button>
        </div>
      ))}
    </NavLink>
      <div className="slide-buttons">
        {slides.map((slide, index) => (
          <button key={index} onClick={() => goToSlide(index)} className="point-button">&#8226;</button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;




