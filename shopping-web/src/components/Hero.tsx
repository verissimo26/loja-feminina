"use client";

import React from "react";
import Slider from "react-slick";
import Slides from "./Slides";

const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const slideData = [
    {
        id: 0,
        img: "/banner-1.jpg",
        title: "Tendencias",
        mainTitle: "Ultimas tendências da moda",
        price: "R$ 99,00",
    },
    {
        id: 1,
        img: "/banner-2.jpg",
        title: "Ultimas tendências em acessórios",
        mainTitle: "Óculos de Sol",
        price: "R$ 99,00",
    },
    {
        id: 2,
        img: "/banner-3.jpg",
        title: "Outlet",
        mainTitle: "Ofertas de verão",
        price: "R$ 99,00",
    },
  ];

  return (
    <div>
      <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slides
              key={item.id}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;