"use client";

import { Box, Image } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";

const MovverGalary = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    // centerPadding: "30px",
    responsive: [
      {
        breakpoint: 1274, // For tablets and small desktops
        settings: {
          slidesToShow: 3,
          // centerPadding: "40px",
        },
      },
      {
        breakpoint: 900, // For mobile devices
        settings: {
          slidesToShow: 2,
          // centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Box py={["4.5rem", "4.5rem", "4.5rem", "5.5rem"]} w={'100%'}>
        <Slider {...settings} >
        
          {["gallary-img1.png", "gallary-img2.png", "gallary-img3.png", "gallary-img4.png","gallary-img1.png", "gallary-img2.png", "gallary-img3.png", "gallary-img4.png"].map((img, idx) => (
            <Box key={idx} w={'100%'}>
              <Image src={`movers/${img}`} alt={`Gallery Image ${idx + 1}`} w={{base:'140px', md:'300px'}}/>
            </Box>
          ))}    
        </Slider>
      </Box>
    </div>
  );
};

export default MovverGalary;


