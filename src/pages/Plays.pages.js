import React from "react";
import Slider from "react-slick";


const PlaysCard = (props) => {
  return (
    <>
    <div className="w-full h-30 px-2">
    <img
      className="w-full h-full rounded-xl"
      src={props.src}
      alt="Entertainment Image"
     />
    </div>
    </>
  )
};

const PlaysCourousal = () => {

  const PlaysImage = [

   "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxMiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314523-lychsakbav-portrait.jpg",
   "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314534-ktzzmvqrht-portrait.jpg",
   "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxMiBTZXAgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00304172-pclggvbndr-portrait.jpg",
   "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxMiBTZXAgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00304172-pclggvbndr-portrait.jpg",

];


const settings = {
  infinite: true,
  autoplay: false,
  slidesToShow: 4,
  slidesToScroll: 0,
  InitialSlide: 0,

}

return (
  <>
  <Slider {...settings}>
  {PlaysImage.map((image) => (
    <PlaysCard src={image} />
  ))}
  </Slider>
  </>
)
};

export default PlaysCourousal;
