
import React from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
export default function CarouselComponent() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="">
        <AliceCarousel autoPlay autoPlayInterval="2500" disableButtonsControls   >
          <div>
            <img className="sliderimg" src="./img/carousel/slide1.jpg"/>
          </div>
          <div>
            <img  className="sliderimg" src="./img/carousel/slide2.jpg"/>
          </div>
          <div>
            <img  className="sliderimg" src="./img/carousel/slide3.jpg"/>
          </div>
          <div>
            <img  className="sliderimg" src="./img/carousel/slide4.jpg"/>
          </div>
          <div>
            <img  className="sliderimg" src="./img/carousel/slide5.jpg"/>
          </div>
          </AliceCarousel>
    </div>

    
  )
}