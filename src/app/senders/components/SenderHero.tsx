"use client";

import Navbar from "@/app/components/Navbar";
import {
  Box,
  Button,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const MotionBox = motion(Box);

const SenderHero = () => {
  return (
    <Stack>
      <Navbar />
      <MotionBox
        px={["1rem", "2rem", "2rem", "2rem", "0"]}
        py={["1rem", "3rem", "5rem", "5rem"]}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <VStack width="100%" maxW={"1249px"} mx="auto" pb={"80px"}>
          <Heading
            fontSize={{ base: "24px", md: '38px', lg:"50px" }}
            color={"#000"}
            fontWeight={"bold"}
            w={{ base: "100%", md: "655px" }}
            textAlign={"center"}
            lineHeight={{base: '', lg:"70px"}}
          >
            Send Anything, Anytime at the Best Price
          </Heading>
          <Text
            mt={"19px"}
            w={{ base: "100%", lg: "826px" }}
            color={"#000"}
            textAlign={"center"}
            fontSize={{base: '14px', md: '16px'}}
          >
            Need to send a package across town without breaking the bank? With
            Movva, you can easily connect with everyday commuters on public
            transport to get your items delivered affordably and reliably.
          </Text>
          <Button
            p={"23px 35px"}
            color={"#fff"}
            mt={"30px"}
            cursor={"pointer"}
            bg={"#22244E"}
            border={"1px solid #2057C2"}
            borderRadius={"8px"}
            _hover={{ color: "#000", background: "#fff" }}
            // onClick={() => router.push("/movers")}
          >
            Download Sender App
          </Button>
          <Box mt={"60px"}>
            <Image src="senders/sender-hero.png" alt="" w={"100%"} />
          </Box>
        </VStack>
      </MotionBox>
    </Stack>
  );
};

export default SenderHero;
