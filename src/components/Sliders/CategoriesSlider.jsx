

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import Loader from "../Loader";

export default function CategoriesSlider() {
  const [TheCategories, setTheCategories] = useState(null);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  async function getSliders() {
    try {
      const { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/categories");
      setTheCategories(data.data);
    } catch (error) {
      console.log("Error fetching categories:", error);
    }
  }

  useEffect(() => {
    getSliders();
  }, []);

  return (
    <>
      {TheCategories ? (
        <Slider {...settings} arrows={false} autoplay={true}>
          {TheCategories.map((category) => (
            <div key={category._id} className="md:w-[50%]">
              <img className="w-full h-60" src={category.image} alt={category.name} />
              <h2>{category.name}</h2>
            </div>
          ))}
        </Slider>
      ) : (
        <Loader />
      )}
    </>
  );
}
