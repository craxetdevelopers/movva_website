"use client";

import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const WhyChoose = () => {
  return (
    <Box w={"100%"} h="auto" pos={"relative"}>
      <Box
        backgroundImage="url('/about/choose-bg.png')"
        backgroundRepeat="no-repeat"
        w={"100%"}
        maxW={"1470px"}
        h="200px"
        right={"3"}
        top={"70"}
        pos={"absolute"}
      ></Box>
      <Box w="100%" backgroundSize="inherit" px={" 200px  "}>
        <Box
          py={["1rem", "2rem", "10.5rem", "10.5rem"]}
          px={["1rem", "2rem", "2rem", "2rem", "0"]}
        >
          <VStack alignItems={"start"} width="100%" maxW="1249px">
            <Heading fontSize={"57.65px"} color={"#000000"} fontWeight={"700"}>
              Why Choose Movva?
            </Heading>
            <Flex pt={"100px"} justifyContent={"space-between"} w={"100%"}>
              <Box>
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
                    <VStack alignItems={"start"} w={"428px"}>
                      <Heading fontSize={"40px"} fontWeight={"700"}>
                        {data.title}
                      </Heading>
                      <Text fontSize={"33.43px"} fontWeight={"400"}>
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
