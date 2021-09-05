import React from "react";
import HeroSlider from "react-slick";
import {GrNext,GrPrevious} from "react-icons/gr";
import {NextArrow, PrevArrow} from "./Arrows.component";



// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {
  const settingsLg = {
    arrows: true,
    autoplay: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "300px",
    infinite: true,
    nextArrow: <NextArrow />,
    prevArrow:<PrevArrow />

  }

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow:<PrevArrow />
  };

const images =[
  "https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/bell-bottom-et00117102-14-08-2021-04-33-35.jpg",
  "https://mekhato.com/wp-content/uploads/2021/07/shershaah-sidharth-malhotra-1000x600.jpg",
  "https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/06/29/Pictures/_75bae9f8-ba0a-11ea-b411-fb55c265b659.jpg",
  "https://bollywoodground.com/wp-content/uploads/2021/02/chehre-movie-poster.png",
  "https://i.ytimg.com/vi/psdS0wYRvR8/maxresdefault.jpg"
]

  return (
    <>
  <div className="lg:hidden">
  <HeroSlider {...settings}>
  {
    images.map((image) => (
      <div className="w-full h-64 md:h-80 py-3">
      <img src={image} alt="testing" className="w-full h-full rounded-md"/>
      </div>
    ))
  }
  </HeroSlider>
  </div>

  <div className="hidden lg:block">
  <HeroSlider {...settingsLg}>
  {
    images.map((image) => (
      <div className="w-full h-96 px-2 py-3">
      <img src={image} alt="testing" className="w-full h-full rounded-md"/>
      </div>
    ))
  }
  </HeroSlider>
  </div>
    </>
  );
};

export default HeroCarousal;
