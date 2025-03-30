"use client";

import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React from "react";

const MotionVStack = motion(VStack);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);
const MotionTag = motion(Tag);


// Variants for staggered animation
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }, // Each child appears 0.3s apart
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };


const MoveThings = () => {
    const router = useRouter();
  return (
    <Box
      px={["1rem", "2rem", "2rem", "2rem", "0"]}
      pt={["4.5rem", "4.5rem", "4.5rem", "5.5rem"]}
      bg={"#16193A"}
      h={"auto"}
    >
      <Flex
        width="100%"
        maxW={"1249px"}
        mx="auto"
        pb={"80px"}
        alignItems={"center"}
        justifyContent={"space-between"}
        direction={["column", "column", "column", "row"]}
      >
        <MotionVStack
          alignItems={"start"}
          w={"100%"}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <MotionTag
            p={"8px 13px"}
            borderRadius="full"
            bg={"#EDEFFA"}
            fontWeight={"normal"}
            // w={'100%'}
            fontSize={{ base: "12px", lg: "16px" }}
            variants={itemVariants}
          >
            FOR SENDERS: MOVE THINGS, NOT MOUNTAINS
          </MotionTag>
          <Stack mt={"45px"}>
            <MotionHeading
              fontSize={{ base: "24px", md: "40px" }}
              color={"#fff"}
              fontWeight={"bold"}
              w={{ base: "100%", md: "383px" }}
              variants={itemVariants}
            >
              A Simpler Way to Get things to Where They Need to Be.
            </MotionHeading>
          </Stack>
          <MotionText mt={"19px"} w={{ base: "100%", lg: "422px" }} color={"#fff"} variants={itemVariants}>
            Need to send an item? Connect with people already headed in that
            direction.
          </MotionText>
          <MotionButton
            p={"23px 35px"}
            color={"#000"}
            mt={{ base: "10px", lg: "40px" }}
            cursor={"pointer"}
            fontWeight={"bold"}
            bg={"#17D1C6"}
            borderRadius={"8px"}
            _hover={{
              color: "#17D1C6",
              background: "none",
              border: "1px solid #17D1C6",
            }}
            variants={itemVariants}
            onClick={() => router.push("/movers")}
          >
            Download Sender App
          </MotionButton>
        </MotionVStack>
        <Box>
          <Image src="key-benefit/move-things-img.png" alt="" w={"100%"} />
        </Box>
      </Flex>
    </Box>
  );
};

export default MoveThings;
