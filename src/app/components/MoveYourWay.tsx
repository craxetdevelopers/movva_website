"use client";

import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

const MoveYourWay = () => {
  const router = useRouter()
  return (
    <Box
      mt={"90px"}
      h="auto"
      w="100%"
      backgroundImage="url('/landingpage/your-way-bg.png')"
      backgroundPosition="top"
      backgroundRepeat="no-repeat"
    >
      <Box
        px={["1rem", "2rem", "2rem", "2rem", "0"]}
        py={["1rem", "2rem", "2.5rem", "2.5rem"]}
      >
        <VStack width="100%" maxW={"1249px"} mx="auto" pb={"80px"}>
          <Heading
            fontSize={{ base: "28px", md: "45px", lg: "60px" }}
            color={"#000"}
          >
            Movve your Way
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
                w={{ base: "100%", md: "362px" }}
                bg={data.bg}
                borderRadius={"36px"}
                p={"30px"}
                alignItems={"start"}
                key={idx}
              >
                <Stack h={{ base: "auto", md: "250px" }}>
                  <Heading
                    color={data.titleColor}
                    fontSize={{ base: "29px", lg: "38.1px" }}
                    fontWeight={"600"}
                  >
                    {data.title}
                  </Heading>
                  <Text
                    w={{ base: "100%", lg: "257px" }}
                    pt={"15px"}
                    fontSize={{ base: "18px", lg: "18px" }}
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
          <Button
            p={"30px 25px"}
            bg={"#17D1C6"}
            borderRadius={"100px"}
            color={"#22244E"}
            onClick={() => router.push('/movers')}
          >
            {" "}
            Learn more
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default MoveYourWay;

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
    title: "Earn money on your schedule",
    details: "Earn extra money as you move around",
    img: "/landingpage/way-img1.png",
    titleColor: "#FFFFFF",
    color: "#EBFBFF",
    bg: "#3366FF",
  },
  {
    title: "Instant payouts after each delivery.",
    details: "You’ll be able to cash out at the end of every week",
    img: "/landingpage/way-img2.png",
    titleColor: "#22244E",
    color: "#22244E",
    bg: "#FF7D6A",
  },
  {
    title: "No need for a bike or car",
    details:
      "Pick up orders as long as the destination is in your line of travel - you could be trekking or taking the public transport",
    img: "/landingpage/way-img3.png",
    titleColor: "#FFFFFF",
    color: "#EBFBFF",
    bg: "#22244E",
  },
];
