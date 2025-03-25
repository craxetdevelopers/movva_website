"use client";

import {
  Box,
  Button,
  Heading,
  Stack,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
// import { useRouter } from "next/navigation";
import React from "react";

const AboutUs = () => {
  // const router = useRouter();

  return (
    <VStack
      px={["1rem", "2rem", "2rem", "2rem", "0"]}
      mt={{ base: "40px", md: "40px" }}
      w={"100%"}
      mx={"0 auto"}
    >
      <Stack maxW={"1249px"} w={"100%"}>
        <Stack
          h={{base:'60vh', md:'70vh', lg:"80vh"}}
          w="100%"
          backgroundImage="url('/about/about-bg.png')"
          backgroundPosition=""
          backgroundRepeat="no-repeat"
          backgroundSize={{base: 'cover', lg:"contain"}}
          position={"relative"}
        >
          <Box
            position={"absolute"}
            py={["3.5rem", "3.5rem", "4.5rem", "4.5rem"]}
            left={{base: '20px', lg:"60px"}}
          >
            <VStack alignItems={"start"}>
              <Tag
                p={"8px 13px"}
                borderRadius="full"
                bg={"#EDEFFA"}
                fontWeight={"normal"}
                // w={'100%'}
                fontSize={{base: '12px', lg:'16px'}}
              >
                FOR MOVVA’S: TURN YOUR TRIPS INTO INCOME
              </Tag>
              <Stack mt={"45px"}>
                <Heading fontSize={{base: '24px', md:"40px"}} color={"#fff"} fontWeight={"bold"}>
                  A Marketplace
                </Heading>
                <Heading fontSize={{base: '24px', md:"40px"}} color={"#fff"} fontWeight={"bold"}>
                  Where Every Journey Earns
                </Heading>
              </Stack>
              <Text mt={"19px"} w={{base: '100%', lg:"422px"}} color={"#fff"}>
                We connect people who are already moving with those that need
                things to move
              </Text>
              <Button
                p={"23px 35px"}
                color={"#fff"}
                mt={{base: '50px', lg:"170px"}}
                cursor={"pointer"}
                fontWeight={'bold'}
                bg={'transparent'}
                border={"2px solid #fff"}
                borderRadius={"8px"}
                _hover={{ color: "#000", background: "#fff" }}
                // onClick={() => router.push("/movers")}
              >
                Download Movva App
              </Button>
            </VStack>
          </Box>
        </Stack>
      </Stack>
    </VStack>
  );
};

export default AboutUs;
