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
// import Navbar from "./Navbar";
// import Slider from "react-slick";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   autoplaySpeed: 5000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   pauseOnHover: false,
  // };
  return (
    <Box
      // h="100vh"
      w="100%"
      pb={"1.5rem"}
    >
      <Stack gap={"2rem"} h={"auto"}>
        <div className="slider-container">
          <Stack px={["1rem", "2rem", "2rem", "2rem", "0"]}>
            {/* <Slider {...settings}>
              {hero.map((data, idx) => ( */}
            <Stack>
              <VStack
                width="100%"
                maxW={"1249px"}
                mx="auto"
                alignItems={"start"}
              >
                <Flex
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  direction={{ base: "column", md: "row" }}
                  w={"100%"}
                >
                  <VStack
                    pb={"30px"}
                    alignItems={{ base: "center", lg: "start" }}
                    gap={"30px"}
                    py={{ base: "1rem", md: "8rem" }}
                  >
                    <Text
                      w={{ base: "100%", lg: "564px" }}
                      color={"#000"}
                      fontWeight={"700"}
                      fontSize={{ base: "28px", md: "35px", lg: "50px" }}
                      textAlign={{ base: "center", lg: "start" }}
                      lineHeight={{ base: "30px", lg: "60px" }}
                    >
                      Monetize your Movement with Movva
                    </Text>
                    <Text
                      color={"#000"}
                      textAlign={{ base: "center", md: "start" }}
                      fontWeight={"400"}
                      w={{ base: "100%", md: "450px", lg: "564px" }}
                      fontSize={"16px"}
                    >
                      Whether you’re commuting, walking, or using public transport, earn money by
                      helping others move things effortlessly.
                    </Text>
                    <Button
                      p={"23px 35px"}
                      bg={"#22244E"}
                      border={"1px solid #2057C2"}
                      borderRadius={"8px"}
                      _hover={{color:'#000', background: '#fff'}}
                      onClick={() => router.push("/movers")}
                    >
                      See offers
                    </Button>
                  </VStack>
                  <VStack>
                    <Image
                      src={'/landingpage/hero-new.png'}
                      alt=""
                      w={{ base: "100%", sm: "405px" }}
                    />
                  </VStack>
                </Flex>
              </VStack>
            </Stack>
            {/* ))}
            </Slider> */}
          </Stack>
        </div>
      </Stack>
    </Box>
  );
};

export default HeroSection;

// interface Hero {
//   title: string;
//   details: string;
//   img: string;
// }

// const hero: Hero[] = [
//   {
//     title: "Already heading somewhere? Why not earn as you go",
//     img: "landingpage/hero-img1.png",
//     details:
//       "We believe everyone deserves an opportunity to earn and every package deserves to arrive on time.",
//   },
//   {
//     title: "Earn as You Go. Deliver with Movva.",
//     img: "landingpage/hero-img2.png",
//     details:
//       "Join the decentralized delivery revolution and turn your daily trips into an income stream.",
//   },
//   {
//     title: "Earn money while delivering packages",
//     img: "landingpage/hero-img3.png",
//     details:
//       "Deliver packages to your travel destination and earn extra income.",
//   },
// ];
