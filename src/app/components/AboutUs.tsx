"use client";

import {
  Box,
  Button,
  Heading,
  Image,
  Stack,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const AboutUs = () => {
  const router = useRouter();

  return (
    <Box
      px={["1rem", "2rem", "2rem", "2rem", "0"]}
      mt={{ base: "40px", md: "40px" }}
      w={"100%"}
    >
      <VStack maxW={"1249px"} mx={"auto"} w={"100%"}>
        <MotionBox
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          w={"100%"}
          position="relative"
        >
          <Box>
            <Image
              src="/about/about-bg.png"
              alt=""
              w="100%"
              h={{base:'60vh', md:'60vh', lg:'70vh', xl: 'auto'}}
              objectFit="cover"
            />
          </Box>
          <Box
            position={"absolute"}
            top="10%" // Center vertically
            left="5%" // Adjust positioning
            
          >
            <VStack alignItems={"start"}>
              <Tag
                p={"8px 13px"}
                borderRadius="full"
                bg={"#EDEFFA"}
                fontWeight={"normal"}
                // w={'100%'}
                fontSize={{ base: "12px", lg: "16px" }}
              >
                FOR MOVVAS: TURN YOUR TRIPS INTO INCOME
              </Tag>
              <Stack mt={"45px"}>
                <Heading
                  fontSize={{ base: "24px", md: "40px" }}
                  color={"#fff"}
                  fontWeight={"bold"}
                >
                  A Marketplace
                </Heading>
                <Heading
                  fontSize={{ base: "24px", md: "40px" }}
                  color={"#fff"}
                  fontWeight={"bold"}
                >
                  Where Every Journey Earns
                </Heading>
              </Stack>
              <Text
                mt={"19px"}
                w={{ base: "100%", lg: "422px" }}
                color={"#fff"}
              >
                We connect people who are already moving with those that need
                things to move
              </Text>
              <Button
                p={"23px 35px"}
                color={"#fff"}
                mt={{ base: "50px", lg: "170px" }}
                cursor={"pointer"}
                fontWeight={"bold"}
                bg={"transparent"}
                border={"2px solid #fff"}
                borderRadius={"8px"}
                _hover={{ color: "#000", background: "#fff" }}
                onClick={() => router.push("/movers")}
              >
                Download Movva App
              </Button>
            </VStack>
          </Box>
        </MotionBox>
      </VStack>
    </Box>
  );
};

export default AboutUs;
