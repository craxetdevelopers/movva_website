"use client";

import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionHStack = motion(HStack);

const HowItWorks = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  return (
    <>
      <Box
        px={["1rem", "2rem", "2rem", "2rem", "0"]}
        pt={["1.5rem", "1.5rem", "4.5rem", "5.5rem"]}
      >
        <VStack
          width="100%"
          maxW={"1249px"}
          mx="auto"
          pb={"80px"}
          alignItems={"center"}
        >
          <Heading mb={"40px"} color={'#000'}>How it works</Heading>

          <VStack alignItems={"center"} gap={"30px"} w={"100%"}>
            {howItWorks.map((works, idx) => {
              return (
                <MotionHStack
                  key={idx}
                  ref={ref}
                  w={{ base: "100%", md: "588px" }}
                  h={"100px"}
                  bg={"#F3F3F3"}
                  borderRadius={"8px"}
                  justifyContent={"start"}
                  gap={"30px"}
                  px={"25px"}
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  }
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: idx * 0.3, // Stagger effect
                  }}
                >
                  <Box>
                    <Image src={works.img} alt="" />
                  </Box>
                  <Text color={'#000'} fontSize={{ base: "14px", md: "16px" }}>
                    {works.details}
                  </Text>
                </MotionHStack>
              );
            })}
          </VStack>
        </VStack>
      </Box>
      <Box>
        <Image src="key-benefit/root.png" alt="" w={"100%"} />
      </Box>
    </>
  );
};

export default HowItWorks;

interface HowItWorks {
  details: string;
  img: string;
}

const howItWorks: HowItWorks[] = [
  {
    details:
      "Sign up & Verify - Join our community with quick KYC verification.",
    img: "/key-benefit/one.svg",
  },
  {
    details:
      "Get Matched - Receive package requests that align with your daily route.",
    img: "/key-benefit/two.svg",
  },
  {
    details: "Pick Up & Drop Off - Earn money just by moving naturally.",
    img: "/key-benefit/three.svg",
  },
  {
    details:
      "Instant Payouts - Withdraw earnings easily after each successful trip.",
    img: "/key-benefit/four.svg",
  },
];
