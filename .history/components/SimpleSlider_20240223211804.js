import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

export default function SimpleSlider({children,dots,noOfSlides}) {
    var settings = {
      dots: dots,
      infinite: false,
      speed: 500,
      slidesToShow: noOfSlides,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows:false,
      // autoplay: true,
      // speed: 3000,
      // autoplaySpeed: 3000,
      draggable:true,
      swipe:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="slider-container gap-10">
        <Slider {...settings}>
        {children}
        </Slider>
      </div>
    );
  }