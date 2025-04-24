"use client";

import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const MotionImage = motion(Image);
const MotionHStack = motion(HStack);
const MotionVStack = motion(VStack);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }, // Stagger effect for each accordion item
  },
};
const itemVariants = {
  hidden: { opacity: 0, x: 50 }, // Slide in from the right
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const StepGuide = () => {
  return (
    <Box
      px={["1rem", "2rem", "2rem", "2rem", "0"]}
      py={["3.5rem", "3.5rem", "4.5rem", "8.5rem"]}
      w={"100%"}
      backgroundColor={"#16193A"}
    >
      <Flex
        w="100%"
        maxW="1249px"
        mx={"auto"}
        gap={"70px"}
        justifyContent={"space-between"}
        whiteSpace={"100%"}
        direction={[
          "column-reverse",
          "column-reverse",
          "column-reverse",
          "row",
        ]}
      >
        <VStack>
          <MotionImage
            src="/movers/movva-step.png"
            alt=""
            w={{ base: "100%", md: "600px", lg: "100%" }}
            animate={{ rotate: [0, -10, 10, -8, 8, -5, 5, 0] }} // Bell swing motion
            transition={{
              duration: 1.0, // Time for one jiggle cycle
              repeat: Infinity, // Keep repeating
              repeatDelay: 5, // Pause 3 seconds before next jiggle
              ease: "easeInOut",
            }}
          />
        </VStack>
        <VStack alignItems={"start"}>
          <Heading
            fontSize={{ base: "24px", md: "30px", lg: "36px" }}
            mb={"30px"}
            fontWeight={"bold"}
            color={"#fff"}
          >
            How it works
          </Heading>
          <MotionVStack
            gap={"40px"}
            alignItems={"start"}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {steps.map((step, idx) => (
              <MotionHStack
                gap={"20px"}
                key={idx}
                variants={itemVariants}
              >
                <Box>
                  <Image src={step.img} alt="" w={"100%"} />
                </Box>
                <Text
                  fontSize={{ base: "14px", md: "16px" }}
                  color={"#fff"}
                  w={{ base: "100%", md: "349px" }}
                >
                  {step.details}
                </Text>
              </MotionHStack>
            ))}
          </MotionVStack>
        </VStack>
      </Flex>
    </Box>
  );
};

export default StepGuide;

interface Steps {
  details: string;
  img: string;
}

const steps: Steps[] = [
  {
    details: "Download the Movva app - Complete your KYC and be verified.",
    img: "/movers/one.svg",
  },
  {
    details: "Set Your Destination - Tell Movva where you’re going.",
    img: "/movers/two.svg",
  },
  {
    details:
      "Get Matched with Senders - See available delivery requests along your route.",
    img: "/movers/three.svg",
  },
  {
    details:
      "Pick Up & Deliver - Collect the package and drop it off at the destination.",
    img: "/movers/four.svg",
  },
  {
    details:
      "Get Paid Instantly - Once the recipient confirms delivery, you receive your earnings.",
    img: "/movers/five.svg",
  },
];
