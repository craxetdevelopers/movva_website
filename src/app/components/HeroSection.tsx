"use client";

import {
  Box,
  Button,
  Flex,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import Slider from "react-slick";

const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    // customPaging: () => (
    //   <div
    //     style={{
    //       width: "30px",
    //       height: "10px",
    //       borderRadius: "1px",
    //       margin: "10px 5px",
    //       background: "transparent", // Non-active dots are transparent
    //       border: "1px solid #ccc",
          
    //     }}
    //   ></div>
    // ),
    // appendDots: (dots: React.ReactNode) => (
    //   <div
    //     style={{
    //       display: "flex",
    //       justifyContent: "center",
    //       alignItems: "center",
    //       padding: "10px 0",
    //     }}
    //   >
    //     {dots}
    //   </div>
    // ),
  };
  return (
    <Box
      h="100%"
      w="100%"
      backgroundImage="url('/landingpage/hero-bg.png')"
      backgroundRepeat="repeat"
      pb={"1.5rem"}
    >
      <Stack gap={"2rem"} h={"auto"}>
        <Navbar />
        <div className="slider-container">
          <Stack px={["1rem", "2rem", "2rem", "2rem", "0"]}>
            <Slider {...settings}>
              {hero.map((data, idx) => (
                <Stack key={idx}>
                  <VStack
                    width="100%"
                    maxW={"1249px"}
                    mx="auto"
                    alignItems={"start"}
                  >
                    <Text
                      w={{ base: "100%", lg: "796px" }}
                      color={"#fff"}
                      fontWeight={"700"}
                      fontSize={{ base: "38px", md: "60px", lg: "81px" }}
                      textAlign={{ base: "center", lg: "start" }}
                      py={{ base: "1rem", md: "4rem" }}
                      lineHeight={'90px'}
                    >
                      {data.title}
                    </Text>
                    <Flex
                      justifyContent={"space-between"}
                      direction={{ base: "column", md: "row" }}
                      w={'100%'}
                    >
                      <VStack
                        pb={"30px"}
                        alignItems={{ base: "center", lg: "start" }}
                        gap={"50px"}
                      >
                        <Text
                          color={"#FFFFFF"}
                          textAlign={{ base: "center", md: "start" }}
                          fontWeight={"400"}
                          w={{ base: "", md: "450px", lg: "527px" }}
                          fontSize={"21px"}
                        >
                          {data.details}
                        </Text>
                        <Button
                          p={"30px 25px"}
                          bg={"#17D1C6"}
                          border={"1px solid #2057C2"}
                          borderRadius={"100px"}
                        >
                          Learn more
                        </Button>
                      </VStack>
                      <VStack  >
                        <Image
                          src={data.img}
                          alt=""
                          w={{ base: "100%", sm: "405px" }}
                        
                        />
                      </VStack>
                    </Flex>
                  </VStack>
                </Stack>
              ))}
            </Slider>
          </Stack>
        </div>
      </Stack>
    </Box>
  );
};

export default HeroSection;

interface Hero {
  title: string;
  details: string;
  img: string;
}

const hero: Hero[] = [
  {
    title: "Already heading somewhere? Why not earn as you go",
    img: "landingpage/hero-img1.png",
    details:
      "We believe everyone deserves an opportunity to earn and every package deserves to arrive on time.",
  },
  {
    title: "Earn as You Go. Deliver with Movva.",
    img: "landingpage/hero-img2.png",
    details:
      "Join the decentralized delivery revolution and turn your daily trips into an income stream.",
  },
  {
    title: "Earn money while delivering packages",
    img: "landingpage/hero-img3.png",
    details:
      "Deliver packages to your travel destination and earn extra income.",
  },
];
