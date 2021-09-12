import React from "react";
import Slider from "react-slick";

//component
import Poster from "../Poster/poster.component";
import settings from "../../config/PosterCarousal.config";
import PremierImages from "../../config/TempPosters.config.js";
export const Premier = () => {


  return (<>
    <div className="flex flex-col items-start py-4">
    <h3 className="text-white text-xl font-bold">Premiers</h3>
    <p className="text-white text-sm"> brand new </p>
    </div>
    <Slider {...settings}>
    {PremierImages.map((image)=> (
      <Poster {...image} isDark />
    ))}
    </Slider>
    </>);
};

export default Premier;
