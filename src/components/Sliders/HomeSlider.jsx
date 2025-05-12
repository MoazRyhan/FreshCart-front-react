
  import React from "react";
  import Slider from "react-slick";
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
  import photo1 from "../images/slider-image-1.jpeg"
  import photo2 from "../images/slider-image-2.jpeg"
  import photo3 from "../images/slider-image-3.jpeg"


  
  
  export default function HomeSlider() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings} arrows={false} autoplay={true}  >
        <div>
          <img  className="w-full h-80" src={photo1} alt="vegetables" />
        </div>
        <div>
        <img className="w-full h-80"  src={photo2} alt="red velvet" />
        </div>
        <div>
        <img  className="w-full h-80" src={photo3} alt="cokoladni kolutici" />
        </div>
        <div>
          <img className="w-full h-80"  src={photo1} alt="vegetables" />
        </div>
        <div>
        <img className="w-full h-80"  src={photo2} alt="red velvet" />
        </div>
        <div>
        <img  className="w-full h-80" src={photo3} alt="cokoladni kolutici" />
        </div>
      </Slider>
    );
  }