import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./CarouselSection.css"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import HeroSection from './hero';
import D3printing from './CarouselSectionPages/D3Printing'

const NextArrow = ({ onClick }) => {
  return (
    <div className="arrow next" onClick={onClick}>
      <FaArrowRight />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="arrow prev" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
};

const CarouselSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="carousel-slide">
          <div className="carousel-content px-6">
           <HeroSection />
          </div>
        </div>
        <div className="carousel-slide">
          <div className="carousel-content px-6">
           <D3printing />
          </div>
        </div>
        <div className="carousel-slide">
          <div className="carousel-content">
            <h2 className="text-3xl font-bold">Section 3</h2>
            <p className="text-lg">This is the third section.</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CarouselSection;
