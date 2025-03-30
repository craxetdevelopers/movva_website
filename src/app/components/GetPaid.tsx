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
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React from "react";

const MotionVStack = motion(VStack);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);

// Variants for staggered animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }, // Each child appears 0.3s apart
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const GetPaid = () => {
    const router = useRouter();
  return (
    <Box
      px={["1rem", "2rem", "2rem", "2rem", "0"]}
      py={["1.5rem", "1.5rem", "2.5rem", "3.5rem"]}
      w={"100%"}
    >
      <Flex
        width="100%"
        maxW={"1249px"}
        mx="auto"
        gap={"40px"}
        pb={"80px"}
        alignItems={{ base: "start", lg: "center" }}
        justifyContent={"space-between"}
        direction={[
          "column-reverse",
          "column-reverse",
          "column-reverse",
          "row",
        ]}
      >
        <Box>
          <Image src="key-benefit/get-paid-img.png" alt="" w={"100%"} />
        </Box>
        <MotionVStack
          w={{ base: "100%", md: "370px" }}
          alignItems={"start"}
          gap={"20px"}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <MotionHeading
            fontSize={{ base: "24px", md: "30px", lg: "40px" }}
            fontWeight={"bold"}
            lineHeight={{ base: "40px", lg: "55px" }}
            variants={itemVariants}
          >
            Get Paid to Move. No Extra Effort Needed.{" "}
          </MotionHeading>

          <MotionText variants={itemVariants}>
            Already going somewhere? Get matched with small delivery requests
            along your route and earn
          </MotionText>
          <MotionButton
            p={"23px 35px"}
            color={"#fff"}
            mt={"10px"}
            cursor={"pointer"}
            bg={"#22244E"}
            border={"1px solid #2057C2"}
            borderRadius={"8px"}
            _hover={{ color: "#000", background: "#fff" }}
            variants={itemVariants}
            onClick={() => router.push("/movers")}
          >
            Download Movva App
          </MotionButton>
        </MotionVStack>
      </Flex>
    </Box>
  );
};

export default GetPaid;
