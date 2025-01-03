"use client";

import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const WhyChoose = () => {
  return (
    <Box w={"100%"} h="auto" pos={"relative"}>
      <Box
        left={{ base: "10px", md: "140px", lg: "200px" }}
        display={{ base: "none", md: "block" }}
        top={"70"}
        pos={"absolute"}
      >
        <Image src="/about/choose-bg.png" alt="" />
      </Box>
      <Box w="100%" maxW="1249px" mx={"auto"}>
        <Box
          py={["3rem", "4rem", "7.5rem", "7.5rem"]}
          px={["1rem", "2rem", "2rem", "2rem", "0"]}
          w={"100%"}
        >
          <VStack alignItems={{ base: "center", lg: "start" }}>
            <VStack textAlign={{ base: "center", lg: "start" }}>
              <Heading
                fontSize={{ base: "38px", md: "45px", lg: "57.65px" }}
                color={"#000000"}
                fontWeight={"700"}
              >
                Why Choose Movva?
              </Heading>
            </VStack>
            <Flex
              pt={{ base: "30px", md: "60px", lg: "100px" }}
              justifyContent={{ base: "center", xl: "space-between" }}
              w={"100%"}
              flexWrap={"wrap"}
              gap={{ base: "40px" }}
            >
              <Box display={{ base: "none", md: "block" }}>
                <Image src="about/choose-img.png" alt="" />
              </Box>
              <VStack alignItems={"start"} justifyContent={"space-between"}>
                {choose.map((data, idx) => (
                  <Flex
                    gap={"30px"}
                    color={"#22244E"}
                    alignItems={"center"}
                    key={idx}
                  >
                    <Box>
                      <Image src={data.img} alt="" />
                    </Box>
                    <VStack
                      alignItems={"start"}
                      w={{ base: "100%", lg: "428px" }}
                    >
                      <Heading
                        fontSize={{ base: "24px", md: "32px", lg: "40px" }}
                        fontWeight={"700"}
                      >
                        {data.title}
                      </Heading>
                      <Text
                        fontSize={{ base: "18px", md: "25px", lg: "33.43px" }}
                        fontWeight={"400"}
                      >
                        {data.details}
                      </Text>
                    </VStack>
                  </Flex>
                ))}
              </VStack>
            </Flex>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default WhyChoose;

interface Choose {
  title: string;
  details: string;
  img: string;
}

const choose: Choose[] = [
  {
    title: "Community-Driven: ",
    img: "about/choose-community.png",
    details: "Empowering individuals to earn and connect.",
  },
  {
    title: "Cost-Effective: ",
    img: "about/choose-cost.png",
    details: "Affordable deliveries without compromising speed.",
  },
  {
    title: "Eco-Friendly:",
    img: "about/choose-eco.png",
    details: "Encouraging foot and local deliveries reduces carbon footprints.",
  },
];
