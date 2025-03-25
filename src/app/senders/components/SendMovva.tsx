"use client";

import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const SendMovva = () => {
  return (
    <Box
      px={["1rem", "2rem", "2rem", "2rem", "0"]}
      py={["1rem", "2rem", "2.5rem", "2.5rem"]}
    >
      <VStack width="100%" maxW={"1249px"} mx="auto" pb={"80px"}>
        <Heading
          fontSize={{ base: "24px", md: "30px", lg: "40px" }}
          color={"#000"}
        >
          Why Send with Movva
        </Heading>
        <Flex
          mb={"60px"}
          w={"100%"}
          mt={"50px"}
          justifyContent={{ base: "center", xl: "space-between" }}
          flexWrap={"wrap"}
          gap={{ base: "40px" }}
        >
          {yourWay.map((data, idx) => (
            <VStack
              h={{ base: "100%", lg: "448px" }}
              w={{ base: "100%", md: "280px" }}
              bg={data.bg}
              borderRadius={"36px"}
              p={"30px"}
              alignItems={"start"}
              key={idx}
            >
              <Stack h={{ base: "auto", md: "250px" }}>
                <Heading
                  color={data.titleColor}
                  fontSize={{ base: "20px", lg: "32px" }}
                  fontWeight={"bold"}
                >
                  {data.title}
                </Heading>
                <Text
                  pt={"15px"}
                  fontSize={{ base: "16px", lg: "16px" }}
                  color={data.color}
                >
                  {data.details}
                </Text>
              </Stack>
              <Box pt={{ base: "10px", lg: "30px" }}>
                <Image src={data.img} alt="" />
              </Box>
            </VStack>
          ))}
        </Flex>
      </VStack>
    </Box>
  );
};

export default SendMovva;

interface YourWay {
  title: string;
  details: string;
  img: string;
  titleColor: string;
  color: string;
  bg: string;
}

const yourWay: YourWay[] = [
  {
    title: "Affordable Deliveries",
    details: "Get your items moved at a fraction of traditional courier costs.",
    img: "/senders/afford-icon.svg",
    titleColor: "#FFFFFF",
    color: "#EBFBFF",
    bg: "#3366FF",
  },
  {
    title: "Faster than traditional logistics",
    details:
      "No need to wait hours or days your item moves with someone already heading in that direction",
    img: "/senders/fast-icon.svg",
    titleColor: "#22244E",
    color: "#22244E",
    bg: "#dbe9f4",
  },
  {
    title: "Convenient & Seamless",
    details: "Book a delivery in seconds and track its progress.",
    img: "/senders/plug-icon.svg",
    titleColor: "#FFFFFF",
    color: "#EBFBFF",
    bg: "#22244E",
  },
  {
    title: "Secure & Trustworthy",
    details: "Movva’s are verified, goods in transit are insured, and deliveries are tracked for peace of mind.",
    img: "/senders/lock-icon.svg",
    titleColor: "#22244E",
    color: "#22244E",
    bg: "#FF7D6A",
  },
];
