"use client";

import { Box, Image } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";

const Galary = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    // centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1274, // For tablets and small desktops
        settings: {
          slidesToShow: 3,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 900, // For mobile devices
        settings: {
          slidesToShow: 2,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Box px={["1rem", "2rem", "4.5rem", "6.5rem"]} w={'100%'}>
        <Slider {...settings} >
        
          {["galary-img1.png", "galary-img2.png", "galary-img3.png", "galary-img4.png","galary-img1.png", "galary-img2.png", "galary-img3.png", "galary-img4.png"].map((img, idx) => (
            <Box key={idx} w={'100%'}>
              <Image src={`landingpage/${img}`} alt={`Gallery Image ${idx + 1}`} w={{base:'140px', md:'200px'}}/>
            </Box>
          ))}
         
          
        </Slider>
      </Box>
    </div>
  );
};

export default Galary;


interface Galary {
  img: string;
}

// const galary: Galary[] = [
//   {
//     img: "landingpage/galary-img1.png",
//   },
//   {
//     img: "landingpage/galary-img2.png",
//   },
//   {
//     img: "landingpage/galary-img3.png",
//   },
//   {
//     img: "landingpage/galary-img4.png",
//   },
//   {
//     img: "landingpage/galary-img1.png",
//   },
//   {
//     img: "landingpage/galary-img2.png",
//   },
//   {
//     img: "landingpage/galary-img3.png",
//   },
//   {
//     img: "landingpage/galary-img4.png",
//   },
// ];
