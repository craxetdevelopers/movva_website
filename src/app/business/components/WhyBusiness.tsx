"use client";

import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const WhyBusiness = () => {
  return (
    <Box
      px={["1rem", "2rem", "2rem", "2rem", "0"]}
      py={["1rem", "2rem", "6.5rem", "6.5rem"]}
      color={"#fff"}
    >
      <VStack width="100%" maxW={"1249px"} mx="auto" color={"#14141A"}>
        <Heading fontWeight={"700"} fontSize={"40px"}>
          Why Movva Works for Businesses:
        </Heading>
        <Flex justifyContent={"space-between"} py={"90px"} w={"100%"}>
          {bWorks.map((data, idx) => (
            <VStack key={idx} gap={"40px"}>
              <Box>
                <Image src={data.img} alt="" />
              </Box>
              <VStack
                // w={"199px"}
                // h={"57px"}
                px={"20px"}
                py={"12px"}
                bg={"#22244E"}
                color={"#17D1C6"}
                borderRadius={"20px"}
                justifyContent={"center"}
              >
                <Text color={"#17D1C6"} fontSize={"24px"} fontWeight={"700"}>
                  {data.title}
                </Text>
              </VStack>
              <Text
                fontSize={"20px"}
                color={"#14141A"}
                w={"353px"}
                textAlign={"center"}
              >
                {data.details}
              </Text>
            </VStack>
          ))}
        </Flex>
        <VStack mt={"10px"} alignItems={"center"} w={"100%"}>
          <Button
            p={"30px 25px"}
            bg={"#FF7D6A"}
            borderRadius={"100px"}
            color={"#22244E"}
            fontSize={'20px'}
            fontWeight={'500'}
          >
            {" "}
            Book a Delivery Now
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
};

export default WhyBusiness;

interface BusinessWorks {
  title: string;
  details: string;
  img: string;
}

const bWorks: BusinessWorks[] = [
  {
    title: "Cost Savings: ",
    img: "business/savings.png",
    details: "Lower delivery fees compared to traditional logistics services.",
  },
  {
    title: "Fast Deliveries ",
    img: "business/delivery.png",
    details: "Match with nearby Movers for quicker turnarounds.",
  },
  {
    title: "Scalable Solutions",
    img: "business/solution.png",
    details:
      "From a few packages a week to daily deliveries, Movva grows with you.",
  },
];
