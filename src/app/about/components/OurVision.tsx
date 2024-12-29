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

const OurVision = () => {
  return (
    <div>
      <Box
        px={["1rem", "2rem", "2rem", "2rem", "0"]}
        py={["1rem", "2rem", "6.5rem", "6.5rem"]}
      >
        <Flex
          width="100%"
          maxW={"1249px"}
          mx="auto"
          justifyContent={"space-between"}
        >
          {vision.map((data, idx) => (
            <Stack
              w={"541px"}
              h={"auto"}
              bg={"#17D1C6"}
              borderRadius={"37.63px"}
              p={["1rem", "2rem", "3rem", "3rem"]}
              color={"#22244E"}
              key={idx}
            >
              <Stack h={"400px"}>
                <Heading fontSize={"63.75px"} fontWeight={"600"}>
                  {data.title}
                </Heading>
                <Text fontSize={"33.43px"} fontWeight={"400"} >
                  {data.details}
                </Text>
              </Stack>
              <VStack alignItems={"end"}>
                <Box>
                  <Image src="about/arrow.png" alt="" />
                </Box>
              </VStack>
            </Stack>
          ))}
        </Flex>
      </Box>
    </div>
  );
};

export default OurVision;

interface Vision {
  title: string;
  details: string;
}

const vision: Vision[] = [
  {
    title: "Mission Statement",
    details:
      "By decentralizing last mile delivery, we’re not just moving parcels—we’re empowering people.",
  },
  {
    title: "Our Vision",
    details:
      "To create Africa's most inclusive and efficient logistics platform.",
  },
];
